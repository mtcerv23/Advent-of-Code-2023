const fs = require("fs");

const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('input.txt');

let string;
let nums;
let firstAndLastNum;
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    string = arr[i];
    nums = string.match(/[0-9]/g);
    if (nums) {
        if (nums.length === 1) firstAndLastNum = Number(`${nums[0]}${nums[0]}`);
        else firstAndLastNum = Number(`${nums[0]}${nums[nums.length - 1]}`);
        sum += firstAndLastNum;
    }
}

console.log(sum);
console.log(arr.length);