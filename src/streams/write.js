import { createWriteStream } from "fs";
import path from "path";

import { getPathAndFilename } from "../misc/index.js";

const { __dirname } = getPathAndFilename(import.meta.url);
const FILE = path.resolve(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  process.stdin.pipe(createWriteStream(FILE));
};

await write();
