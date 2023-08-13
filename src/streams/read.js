import { createReadStream } from "fs";
import path from "path";

import { getPathAndFilename } from "../misc/index.js";

const { __dirname } = getPathAndFilename(import.meta.url);
const FILE = path.resolve(__dirname, "files", "fileToRead.txt");

const read = async () => {
  createReadStream(FILE).pipe(process.stdout);
};

await read();
