const fs = require("fs");

const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('input.txt');

let string = 'one1two2three3';

console.log(string.match(/\d^one/g));