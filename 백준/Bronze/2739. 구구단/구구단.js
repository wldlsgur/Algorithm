const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close" , () => {
    const N = Number(inputs.shift());

    solution(N);
})

function solution(N) {
    for(let i=1 ; i<=9 ; i++) {
        console.log(`${N} * ${i} = ${N * i}`);
    }
}