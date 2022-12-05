import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import path from 'path';

import { getPathAndFilename } from '../misc/index.js';

const calculateHash = async () => {
  const { __dirname } = getPathAndFilename(import.meta.url);
  const FILE = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

  const fileData = await readFile(FILE);
  const hash = createHash('sha256').update(fileData).digest('hex');

  console.log(hash);
};

await calculateHash();
