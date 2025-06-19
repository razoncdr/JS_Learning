const nums = [2, 5, -6, -3, 5]

let sum = 0;

sum = nums.filter(val=>val>0).reduce((acc, cur) => acc+cur, 0);

console.log(sum)