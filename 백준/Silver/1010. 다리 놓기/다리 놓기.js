const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const testCase = Number(inputs.shift());

    for(let tc=1 ; tc<=testCase ; tc++) {
        const [N, M] = inputs.shift().split(" ").map(Number);

        console.log(Math.round((factorial(M) / (factorial(M - N) * factorial(N)))));
    }
});


function factorial(num){
    if(num <= 1) return 1;
    return num * factorial(num - 1);
}