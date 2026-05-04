import { writeFile, readFile, readdir } from 'fs/promises';
import { join } from 'path';
import { getMatterPath } from './matter.js';
import type { Artifact } from '../types/artifact.js';

export async function saveArtifact(matterName: string, artifact: Artifact): Promise<Artifact> {
  const artifactDir = getMatterPath(matterName, '_artifacts');
  const filePath = join(artifactDir, `${artifact.id}.json`);
  await writeFile(filePath, JSON.stringify(artifact, null, 2), 'utf-8');

  return artifact;
}

export async function listArtifacts(matterName: string): Promise<Artifact[]> {
  const artifactDir = getMatterPath(matterName, '_artifacts');
  try {
    const files = await readdir(artifactDir);
    const artifacts: Artifact[] = [];
    for (const file of files) {
      if (!file.endsWith('.json')) continue;
      const content = await readFile(join(artifactDir, file), 'utf-8');
      artifacts.push(JSON.parse(content) as Artifact);
    }
    return artifacts.sort((a, b) => a.accepted.localeCompare(b.accepted));
  } catch {
    return [];
  }
}

export function getArtifactPath(matterName: string, artifactId: string): string {
  return getMatterPath(matterName, '_artifacts', `${artifactId}.json`);
}
