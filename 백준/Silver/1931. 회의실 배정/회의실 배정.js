const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const inputs = [];

rl.on("line", (input) => {
  inputs.push(input.trim());
}).on("close" , () => {
  const N = Number(inputs[0]);
  const meetingTime = inputs.slice(1, inputs.length).map((value) => {
    return value.split(" ").map(Number);
  });

  solution(N, meetingTime);
})

function solution(N, meetingTime) {
  meetingTime.sort((a, b) => {
    //끝나는 시간이 같으면 시작시간으로 비교해서 정렬
    if(a[1] === b[1]) {
      return a[0] - b[0];
    }
    else {
      return a[1] - b[1];
    }
  })

  let result = 1;
  let nowEndTime = meetingTime[0][1];

  for(let i=1; i<meetingTime.length ; i++) {
    if(nowEndTime <= meetingTime[i][0]) {
      result++;
      nowEndTime = meetingTime[i][1];
    }
  }
  console.log(result);
}