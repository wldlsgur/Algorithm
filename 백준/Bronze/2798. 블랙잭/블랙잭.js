const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    ouput : process.stdout,
});

let inputs = [];
rl.on("line", (input) => {
    inputs.push(input);

    if(inputs.length === 2){
        const [N, M] = [...(inputs[0].split(" ").map((value) => Number(value)))];
        const numbers = inputs[1].split(" ").map((value) => Number(value));
        // console.log("N :", N, "M :", M, " numbers :", numbers)
        const result = calculation(N, M ,numbers);
        printResult(result);

        rl.close();
    }
})

function calculation(N, M, numbers) {
    let max = 0;

    for(let i=0 ; i<N ; i++){
        for(let j=i+1 ; j<N ; j++){
            for(let z=j+1 ; z<N ; z++){
                const sum = numbers[i] + numbers[j] + numbers[z];

                if(sum > M) continue;
                if(sum === M) return sum;
                if(max < sum) max = sum;
            }
        }
    }
    return max;
}
function printResult(result) {
    console.log(result);
}
// 5 21
// 5 6 7 8 9