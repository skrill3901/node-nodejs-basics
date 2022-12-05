import { writeFile } from "fs/promises";
import path from "path";

import { checkFileOrPath, getPathAndFilename } from "../misc/index.js";

const create = async () => {
  const { __dirname } = getPathAndFilename(import.meta.url);
  const neededPath = path.resolve(__dirname, "files");

  const FILE_NAME = path.resolve(neededPath, "fresh.txt");
  const FILE_DATA = "I am fresh and young";

  const checkFreshFile = await checkFileOrPath(FILE_NAME);
  if (checkFreshFile) throw new Error("FS operation failed");

  await writeFile(FILE_NAME, FILE_DATA);
};

await create();
