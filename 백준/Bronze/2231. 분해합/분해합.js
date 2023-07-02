const rl = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("", (input) => {
    const N = Number(input);
    const result = calculation(N);

    printResult(result);
    rl.close();
});

function calculation(N) {
    for (let i=0; i < N; i++) {
        const number = i;
        const remain = String(number).split("");  
          
        let remainSum = 0;
        for(let j=0 ; j<remain.length ; j++){
            remainSum += Number(remain[j]);
        }

        if (number + remainSum === N) return number; 
    }
    return 0;
}

function printResult(result) {
    console.log(result);
}
//216 in
//198 out