// import { fileURLToPath } from 'url';
// import path from 'path';
import fs from 'fs';
import getPath from './get-path.js';

const filePath = getPath('data/regions.scv');
const newData = readlineSync.question('New region: ');
const actualData = reader('data/regions.scv');
console.log(actualData.split('\n').length)
// fs.appendFileSync(filePath, `\n${newData}`, 'utf-8');

