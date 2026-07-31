import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export const aliases = {
  '@': resolve(rootDir, 'apps/web/src'),
  '@approval-flow/shared': resolve(rootDir, 'packages/shared/src'),
  '@approval-flow/ui': resolve(rootDir, 'packages/ui/src'),
  '@approval-flow/mocks': resolve(rootDir, 'packages/mocks/src')
};