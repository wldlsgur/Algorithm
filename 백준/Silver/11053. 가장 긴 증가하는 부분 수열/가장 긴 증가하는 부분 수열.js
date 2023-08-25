const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
    inputs.push(input.trim());
}).on("close", () => {
    const N = Number(inputs.shift());
    const Numbers = inputs.shift().split(" ").map(Number);

    solution(N, Numbers);
})

function solution(N, Numbers) {
    const DP = new Array(N).fill(1);

    // 1부터 배열 끝까지 순회하며 검사
    for(let i=1 ; i<Numbers.length ; i++) {
        let max = 0;

        // 0부터 현재 요소 - 1 까지 검사하여 작은 값을 구한다.
        for(let j=0; j<i ; j++) {
            // 작은 값 중에 최대 길이를 구한다
            if(Numbers[i] > Numbers[j]) {
                max = Math.max(DP[j], max);
            }
        }
        // 최대 길이를 DP 배열에 저장
        DP[i] = max + 1;
    }
    console.log(Math.max(...DP));
}   