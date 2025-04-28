const fs = require('fs');
const [K, ...nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const stack = [];

nums.forEach(num => {
    if (num === 0) stack.pop();
    else stack.push(num);
});

console.log(stack.reduce((acc, cur) => acc + cur, 0));
