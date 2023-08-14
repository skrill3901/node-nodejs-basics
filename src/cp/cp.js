import path from "path";
import { fork } from "child_process";

import { getPathAndFilename } from "../misc/index.js";

const { __dirname } = getPathAndFilename(import.meta.url);
const SCRIPT_PATH = path.resolve(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const childProcess = fork(SCRIPT_PATH, args, { silent: true });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["one", "two"]);
