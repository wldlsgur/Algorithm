const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close" , () => {
    const [A, B] = inputs.shift().split(" ").map(Number);

    solution(A, B)
})

function solution(A, B) {
    let result = "";

    if(A > B) result = ">"
    else if(A < B) result = "<"
    else if(A === B) result = "=="

    console.log(result);
}