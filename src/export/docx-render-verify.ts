import JSZip from 'jszip';

export interface ReviewReadyDocxInput {
  title: string;
  matterName: string;
  generatedAt: string;
  body: string;
  sourceMap?: string[];
}

export interface DocxVerificationResult {
  valid: boolean;
  text: string;
  errors: string[];
}

interface DocxParagraph {
  text: string;
  style?: 'Title' | 'Heading1' | 'Heading2' | 'Normal' | 'ListParagraph';
}

export async function renderReviewReadyDocx(input: ReviewReadyDocxInput): Promise<Buffer> {
  const zip = new JSZip();
  const paragraphs = buildParagraphs(input);
  zip.file('[Content_Types].xml', contentTypesXml());
  zip.folder('_rels')?.file('.rels', rootRelsXml());
  zip.folder('docProps')?.file('core.xml', corePropsXml(input));
  zip.folder('word')?.file('document.xml', documentXml(paragraphs));
  zip.folder('word')?.file('styles.xml', stylesXml());
  return zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
}

export async function verifyReviewReadyDocx(buffer: Buffer): Promise<DocxVerificationResult> {
  const errors: string[] = [];
  let text = '';
  try {
    text = await extractDocxText(buffer);
  } catch (error) {
    return {
      valid: false,
      text: '',
      errors: [`DOCX could not be read: ${error instanceof Error ? error.message : String(error)}`],
    };
  }

  if (text.trim().length < 120) {
    errors.push('DOCX body is too short to be a review-ready document.');
  }
  if (looksLikeJsonScaffold(text)) {
    errors.push('DOCX body looks like JSON scaffolding or a raw wrapper.');
  }
  if (/\b(transcript|assistant|tool_call|candidate wrapper)\b/i.test(text) && text.length < 900) {
    errors.push('DOCX body looks like a transcript or fallback wrapper rather than a legal work product.');
  }

  return {
    valid: errors.length === 0,
    text,
    errors,
  };
}

export async function extractDocxText(buffer: Buffer): Promise<string> {
  const zip = await JSZip.loadAsync(buffer);
  const documentXmlFile = zip.file('word/document.xml');
  if (!documentXmlFile) {
    throw new Error('word/document.xml missing');
  }
  const xml = await documentXmlFile.async('string');
  return xml
    .replace(/<w:tab\/>/g, '\t')
    .replace(/<\/w:p>/g, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function buildParagraphs(input: ReviewReadyDocxInput): DocxParagraph[] {
  const paragraphs: DocxParagraph[] = [
    { text: input.title, style: 'Title' },
    { text: `Matter: ${input.matterName}`, style: 'Normal' },
    { text: `Generated: ${input.generatedAt}`, style: 'Normal' },
    { text: 'Document', style: 'Heading1' },
    ...markdownToParagraphs(stripLeadingTitle(input.body, input.title)),
  ];

  if (input.sourceMap?.length) {
    paragraphs.push({ text: 'Citation and Source Map', style: 'Heading1' });
    for (const entry of input.sourceMap) {
      paragraphs.push({ text: entry, style: 'ListParagraph' });
    }
  }

  return collapseBlankParagraphs(paragraphs);
}

function markdownToParagraphs(text: string): DocxParagraph[] {
  const paragraphs: DocxParagraph[] = [];
  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim();
    if (!line) {
      paragraphs.push({ text: '', style: 'Normal' });
      continue;
    }
    const heading = /^(#{1,2})\s+(.+)$/.exec(line);
    if (heading) {
      paragraphs.push({ text: cleanMarkdown(heading[2]), style: heading[1].length === 1 ? 'Heading1' : 'Heading2' });
      continue;
    }
    const bullet = /^[-*]\s+(.+)$/.exec(line);
    if (bullet) {
      paragraphs.push({ text: `- ${cleanMarkdown(bullet[1])}`, style: 'ListParagraph' });
      continue;
    }
    paragraphs.push({ text: cleanMarkdown(line), style: 'Normal' });
  }
  return paragraphs;
}

function collapseBlankParagraphs(paragraphs: DocxParagraph[]): DocxParagraph[] {
  const collapsed: DocxParagraph[] = [];
  for (const paragraph of paragraphs) {
    const previous = collapsed.at(-1);
    if (!paragraph.text && previous && !previous.text) continue;
    collapsed.push(paragraph);
  }
  return collapsed;
}

function stripLeadingTitle(body: string, title: string): string {
  const lines = body.split('\n');
  const first = lines[0]?.replace(/^#\s+/, '').trim();
  if (first?.toLowerCase() === title.trim().toLowerCase()) {
    return lines.slice(1).join('\n').trim();
  }
  return body.trim();
}

function cleanMarkdown(value: string): string {
  return value
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^\|(.+)\|$/, (_, inner: string) => inner.split('|').map((part) => part.trim()).join(' | '))
    .trim();
}

function looksLikeJsonScaffold(text: string): boolean {
  const trimmed = text.trim();
  return /^[{[]/.test(trimmed) || /"(content|payload|metadata|toolCalls|messages|role)"\s*:/.test(trimmed);
}

function contentTypesXml(): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
</Types>`;
}

function rootRelsXml(): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
</Relationships>`;
}

function corePropsXml(input: ReviewReadyDocxInput): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>${xmlEscape(input.title)}</dc:title>
  <dc:subject>${xmlEscape(input.matterName)}</dc:subject>
  <dc:creator>atticus-harness-v2 review-ready export</dc:creator>
  <cp:lastModifiedBy>atticus-harness-v2 review-ready export</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">${xmlEscape(input.generatedAt)}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">${xmlEscape(input.generatedAt)}</dcterms:modified>
</cp:coreProperties>`;
}

function stylesXml(): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/><w:sz w:val="22"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:after="240"/></w:pPr><w:rPr><w:b/><w:sz w:val="36"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:before="240" w:after="120"/></w:pPr><w:rPr><w:b/><w:sz w:val="30"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:before="200" w:after="100"/></w:pPr><w:rPr><w:b/><w:sz w:val="26"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="ListParagraph"><w:name w:val="List Paragraph"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:ind w:left="720"/></w:pPr></w:style>
</w:styles>`;
}

function documentXml(paragraphs: DocxParagraph[]): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    ${paragraphs.map(paragraphXml).join('')}
    <w:sectPr>
      <w:pgSz w:w="11906" w:h="16838"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/>
      <w:docGrid w:linePitch="360"/>
    </w:sectPr>
  </w:body>
</w:document>`;
}

function paragraphXml(paragraph: DocxParagraph): string {
  const style = paragraph.style && paragraph.style !== 'Normal'
    ? `<w:pPr><w:pStyle w:val="${paragraph.style}"/></w:pPr>`
    : '';
  return `<w:p>${style}<w:r><w:t xml:space="preserve">${xmlEscape(paragraph.text)}</w:t></w:r></w:p>`;
}

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
