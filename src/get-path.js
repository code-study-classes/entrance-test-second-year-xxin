import { fileURLToPath } from 'url';
import path from 'path';
// import fs from 'fs';

const getPath = (fPath) => {
  // eslint-disable-next-line no-underscore-dangle
  const __filename = fileURLToPath(import.meta.url);
  // console.log(__filename);
  // eslint-disable-next-line no-underscore-dangle
  const __dirname = path.dirname(__filename);
  // console.log(__dirname);
  const filePath = path.join(__dirname, '..', fPath);
  // console.log(filePath);
  return filePath;
};

export default getPath;
