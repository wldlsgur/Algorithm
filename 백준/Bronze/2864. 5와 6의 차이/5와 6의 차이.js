const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close" , () => {
    const [A, B] = inputs.shift().split(" ");

    solution(A, B)
})

function solution(A, B) {
    const result = [];
    let number1 = "";
    let number2 = "";

    // 최소
    for(let i=0; i<A.length ; i++) {
        number1 += A[i] === "6" ? "5" : A[i];
    }
    for(let i=0; i<B.length ; i++) {
        number2 += B[i] === "6" ? "5" : B[i];
    }
    result.push(Number(number1) + Number(number2));

    number1 = "";
    number2 = "";
    // 최대
    for(let i=0; i<A.length ; i++) {
        number1 += A[i] === "5" ? "6" : A[i];
    }
    for(let i=0; i<B.length ; i++) {
        number2 += B[i] === "5" ? "6" : B[i];
    }
    result.push(Number(number1) + Number(number2));

    console.log(...result);
}