import { createWriteStream } from 'fs';
import path from 'path';
import { stdin } from 'process';

import { getPathAndFilename } from '../misc/index.js';

const write = async () => {
  const { __dirname } = getPathAndFilename(import.meta.url);
  const FILE = path.resolve(__dirname, 'files', 'fileToWrite.txt');

  stdin.pipe(createWriteStream(FILE));
};

await write();
