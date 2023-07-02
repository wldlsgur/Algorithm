const rl = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout,
})

rl.question("", (input) => {
    const result = calculation(input);
    printResult(result);

    rl.close();
})

function calculation(input) {
    const [a, b, c, d, e, f] = [...input.split(" ").map((value) => Number(value))];

    for(let i=-999 ; i<=999 ; i++){
        for(let j=-999 ; j<=999 ; j++){
            const x = i;
            const y = j;

            const cal1 = (a * x) + (b * y);
            const cal2 = (d * x) + (e * y);

            if(cal1 === c && cal2 === f){
                return [x, y];
            }
        }
    }
}

function printResult(result) {
    console.log(result[0], result[1]);
}