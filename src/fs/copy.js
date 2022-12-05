import { readdir, mkdir, copyFile } from 'fs/promises';
import path from 'path';

import { checkFileOrPath, getPathAndFilename } from '../misc/index.js';

const copy = async () => {
  const { __dirname } = getPathAndFilename(import.meta.url);

  const INITIAL_PATH = path.resolve(__dirname, 'files');
  const COPY_PATH = path.resolve(__dirname, 'files_copy');

  const isInitialPath = await checkFileOrPath(INITIAL_PATH);
  const isCopyPath = await checkFileOrPath(COPY_PATH);

  if (!isInitialPath || isCopyPath) {
    throw new Error('FS operation failed');
  } else {
    await mkdir(COPY_PATH);
    const fileNames = await readdir(INITIAL_PATH);

    for (let fileName of fileNames) {
      const initialFile = path.resolve(INITIAL_PATH, fileName);
      const newFile = path.resolve(COPY_PATH, fileName);

      await copyFile(initialFile, newFile);
    }
  }
};

await copy();
