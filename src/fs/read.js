import { readFile } from 'fs/promises';
import path from 'path';

import { checkFileOrPath, getPathAndFilename } from '../misc/index.js';

const read = async () => {
  const { __dirname } = getPathAndFilename(import.meta.url);

  const FILE_TO_READ = path.resolve(__dirname, 'files', 'fileToRead.txt');
  const isFileExist = checkFileOrPath(FILE_TO_READ);

  if (!isFileExist) throw new Error('FS operation failed');

  const file = await readFile(FILE_TO_READ, 'utf-8');
  console.log(file);
};

await read();
