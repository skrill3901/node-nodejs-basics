import { readdir } from 'fs/promises';
import path from 'path';

import { checkFileOrPath, getPathAndFilename } from '../misc/index.js';

const list = async () => {
  const { __dirname } = getPathAndFilename(import.meta.url);

  const FILES_PATH = path.resolve(__dirname, 'files');
  const isFilesExist = checkFileOrPath(FILES_PATH);

  if (!isFilesExist) throw new Error('FS operation failed');

  const fileNames = await readdir(FILES_PATH);
  console.log(fileNames);
};

await list();
