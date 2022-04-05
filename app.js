const path = require('path');
console.log(path.sep);

const demoStrings = 'foo/bar/fizz/buzz';
const sepPath = demoStrings.split(path.sep);
console.log(sepPath);

const filePath = path.join('/content', 'subfolder', 'test.txt');

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(
  __dirname,
  'content',
  'subfolder',
  'test.txt'
);
console.log(absolute);
