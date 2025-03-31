const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
const outputArray = [];
rl.on('line', function (line) {

    input = Number(line.split(' ')[0]);
    for(let i=1; i<=input; i++) {
        outputArray.push("*".repeat(i))
    }
}).on('close', function () {
    console.log(outputArray.join('\n'));
});