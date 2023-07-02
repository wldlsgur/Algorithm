const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (input) => {
    const result = calculation(input);
    printResult(result);
    rl.close();
})

function calculation(input) {
    const [A, B, C] = [...(input.split(" ").map((value) => Number(value)))];
    
    return A + B + C;
}

function printResult(result){
    console.log(result)
}

