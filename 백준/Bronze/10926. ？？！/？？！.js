// readline 모듈 불러오기
const readline = require("readline");

// readline 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 사용자로부터 입력 받기
rl.question("", (id) => {
    PrintOutput(id);
    rl.close();
});

function PrintOutput(id) {
    console.log(`${id}??!`);
}
