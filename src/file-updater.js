// import { fileURLToPath } from 'url';
// import path from 'path';
import fs from 'fs';
import readlineSync from 'readline-sync';
// import reader from './file-reader.js';
import getPath from './get-path.js';

const updater = (fPath, pattern) => {
  const filePath = getPath(fPath);
  fs.appendFileSync(filePath, pattern, 'utf-8');
  return true;
};
export default updater;
