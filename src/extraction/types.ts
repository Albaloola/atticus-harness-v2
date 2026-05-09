export type ExtractionMethod = 'pdftotext' | 'tesseract_ocr' | 'docx_parse' | 'libreoffice' | 'pandoc' | 'plain_text' | 'html_to_text' | 'visual_ocr_pipeline' | 'msg_strings';
export type EvidenceFormat = 'pdf' | 'docx' | 'doc' | 'msg' | 'image' | 'text' | 'html' | 'unknown';

export interface ExtractedText {
  sourceId: string;
  text: string;
  method: ExtractionMethod;
  confidence: number;
  pageCount?: number;
  sha256: string;
  extractedAt: string;
  pages?: PageExtraction[];
}

export interface PageExtraction {
  pageNumber: number;
  text: string;
  method: ExtractionMethod;
  confidence: number;
  renderedImageHash?: string;
}
