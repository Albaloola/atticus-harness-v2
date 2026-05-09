import { isAbsolute, relative, resolve } from 'path';

export function resolveWorkspacePath(inputPath: string): string {
  const root = resolve(process.cwd());
  const candidate = resolve(root, inputPath);
  const relation = relative(root, candidate);

  if (relation === '' || (!relation.startsWith('..') && !isAbsolute(relation))) {
    return candidate;
  }

  throw new Error(`Path is outside the workspace: ${inputPath}`);
}
