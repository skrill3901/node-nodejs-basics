import path from "path";
import { createGunzip } from "zlib";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";

import { getPathAndFilename } from "../misc/index.js";

const { __dirname } = getPathAndFilename(import.meta.url);
const FILE_TO_DECOMRESS = path.resolve(__dirname, "files", "archive.gz");
const PATH_TO_FILES = path.resolve(__dirname, "files", "fileToCompress.txt");

const gunzip = createGunzip();
const source = createReadStream(FILE_TO_DECOMRESS);
const destination = createWriteStream(PATH_TO_FILES);

const decomress = async () => {
  await pipeline(source, gunzip, destination);
};

await decomress();
