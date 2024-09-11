// import { fileURLToPath } from 'url';
// import path from 'path';
import fs from 'fs';
import readlineSync from 'readline-sync';
import getPath from './get-path.js';
import reader from './file-reader.js';

const filePath = getPath('data/regions.csv');
const newData = readlineSync.question('New region:');
fs.appendFileSync(filePath, `\n${newData}`, 'utf-8');
