import { rename as fsRename } from 'fs/promises';
import path from 'path';

import { checkFileOrPath, getPathAndFilename } from '../misc/index.js';

const rename = async () => {
  const { __dirname } = getPathAndFilename(import.meta.url);

  const WRONG_FILE = path.resolve(__dirname, 'files', 'wrongFilename.txt');
  const PROPER_FILE = path.resolve(__dirname, 'files', 'properFilename.md');

  const isWrongFile = await checkFileOrPath(WRONG_FILE);
  const isProperFile = await checkFileOrPath(PROPER_FILE);

  if (isWrongFile && !isProperFile) await fsRename(WRONG_FILE, PROPER_FILE);
  else throw new Error('FS operation failed');
};

await rename();
