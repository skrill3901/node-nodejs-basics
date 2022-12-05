import { access, constants } from "fs/promises";

export const checkFileOrPath = async (path) => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};
