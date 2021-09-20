import { makeBadge, ValidationError } from 'badge-maker';
import fs from 'fs';
 
const format = {
    label: 'Open PRs',
    message: process.env.PR_COUNT,
    labelColor: 'black',
    color: 'blue',
    style: 'flat'
  }
  const svg = makeBadge(format)
  console.log(svg)
  fs.writeFile('test.svg', svg, (err) => {
    if (err) throw err;
    // success case, the file was saved
    console.log('svg saved!');
});
