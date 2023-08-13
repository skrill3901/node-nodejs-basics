import { Transform } from "stream";
import { pipeline } from "stream/promises";

const reverseString = (str) => str.split("").reverse().join("");

const transform = async () => {
  const reverseData = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, reverseString(chunk.toString()));
    },
  });

  await pipeline(process.stdin, reverseData, process.stdout);
};

await transform();
