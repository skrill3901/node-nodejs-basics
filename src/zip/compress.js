import path from "path";
import { createGzip } from "zlib";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";

import { getPathAndFilename } from "../misc/index.js";

const { __dirname } = getPathAndFilename(import.meta.url);
const FILE_TO_COMPRESS = path.resolve(__dirname, "files", "fileToCompress.txt");
const COMPRESSED_FILE = path.resolve(__dirname, "files", "archive.gz");

const gzip = createGzip();
const source = createReadStream(FILE_TO_COMPRESS);
const destination = createWriteStream(COMPRESSED_FILE);

const compress = async () => {
  await pipeline(source, gzip, destination);
};

await compress();
