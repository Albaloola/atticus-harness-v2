export interface SkillDefinition {
  skillId: string;
  path: string;
  manifest: SkillFrontmatter;
  body: string;
  references: string[];
  examples: string[];
}

export interface SkillFrontmatter {
  name: string;
  version: string;
  description: string;
  stage?: string;
  taskTypes?: string[];
  allowedTools?: string[];
}
