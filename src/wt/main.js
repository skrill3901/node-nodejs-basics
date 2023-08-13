import { cpus } from "os";
import { Worker } from "worker_threads";
import path from "path";

import { getPathAndFilename } from "../misc/index.js";

const { __dirname } = getPathAndFilename(import.meta.url);

const NUMBER_OF_CORES = cpus().length;
const STATUS_RESOLVED = "resolve";
const STATUS_ERROR = "error";
const WORKER_URL = path.resolve(__dirname, "worker.js");
const FIRST_NUMBER = 10;

const performCalculations = async () => {
  const calculateNthFibonacci = (workerData) =>
    new Promise((resolve) => {
      const worker = new Worker(WORKER_URL, { workerData });

      worker.on("message", (data) =>
        resolve({ status: STATUS_RESOLVED, data })
      );
      worker.on("error", () => resolve({ status: STATUS_ERROR, data: null }));
    });

  const fibonnaciArray = [];

  for (let i = FIRST_NUMBER; i - FIRST_NUMBER < NUMBER_OF_CORES; i++) {
    const numberFibonacci = await calculateNthFibonacci(i);
    fibonnaciArray.push(numberFibonacci);
  }

  console.log(fibonnaciArray);
};

await performCalculations();
