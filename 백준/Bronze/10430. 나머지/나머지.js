const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question("", (line) => {
    const numbers = line.split(" ").map((number) => Number(number));
    const result = calculation(numbers);
    printResult(result);

    rl.close();
})

function calculation(numbers) {
    const [ A, B, C ] = [...numbers];
    let result = [];

    result.push((A + B) % C);
    result.push(((A % C) + (B % C)) % C);
    result.push((A * B) % C);
    result.push(((A % C) * (B % C)) % C);

    return result;
}

function printResult(result){
    result.map((value) => console.log(value));
}