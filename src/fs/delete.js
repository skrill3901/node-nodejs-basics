import { unlink } from 'fs/promises';
import path from 'path';

import { checkFileOrPath, getPathAndFilename } from '../misc/index.js';

const remove = async () => {
  const { __dirname } = getPathAndFilename(import.meta.url);

  const DELETE_FILE = path.resolve(__dirname, 'files', 'fileToRemove.txt');
  const isDeleteFileExist = await checkFileOrPath(DELETE_FILE);

  if (!isDeleteFileExist) throw new Error('FS operation failed');

  await unlink(DELETE_FILE);
};

await remove();
