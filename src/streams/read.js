import { createReadStream } from 'fs';
import path from 'path';
import { stdout } from 'process';

import { getPathAndFilename } from '../misc/index.js';

const read = async () => {
  const { __dirname } = getPathAndFilename(import.meta.url);
  const FILE = path.resolve(__dirname, 'files', 'fileToRead.txt');

  createReadStream(FILE).pipe(stdout);
};

await read();
