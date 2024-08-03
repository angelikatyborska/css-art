import links from '../src/layouts/links.js'
import path from 'path';
import fs from 'fs';

const allLinks = [...links.grids, ...links.misc];
const covers = fs.readdirSync(path.resolve('./public/covers'), { withFileTypes: true }).map(f => f.name);
const expectedFiles = allLinks.map(l => `${l}.png`).sort();
const actualFiles = covers.map(f => `/${f}`).sort();

const missingFiles = expectedFiles.filter(x => !actualFiles.includes(x));
const unexpectedFiles = actualFiles.filter(x => !expectedFiles.includes(x));

if (missingFiles.length > 0) {
  throw `Missing covers: ${missingFiles.join(', ')}`;
}

if (unexpectedFiles.length > 0) {
  throw `Unexpected covers: ${unexpectedFiles.join(', ')}`;
}

console.log('all ok');
