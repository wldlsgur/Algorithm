const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const S = inputs.shift();
    const q = Number(inputs.shift());
    const questions = inputs.map((row) =>
      row.split(' ').map((value) => (isNaN(value) ? value : Number(value)))
    );

    console.log(solution(S, q, questions));
    process.exit();
  });

function solution(S, q, questions) {
  // 각 알파벳의 누적 개수를 저장하는 2차원 배열 dp 생성
  const dp = Array.from({ length: S.length + 1 }, () => Array(26).fill(0));
  const charCodeA = 'a'.charCodeAt(0);

  // 각 위치까지 누적 알파벳 개수를 계산
  for (let i = 0; i < S.length; i++) {
    const idx = S[i].charCodeAt(0) - charCodeA;
    for (let j = 0; j < 26; j++) {
      dp[i + 1][j] = dp[i][j] + (j === idx ? 1 : 0);
    }
  }

  // 질문에 따라 범위 내 원하는 알파벳의 개수를 계산
  const result = questions.map(([alphabet, i, j]) => {
    const idx = alphabet.charCodeAt(0) - charCodeA;
    return dp[j + 1][idx] - dp[i][idx];
  });

  return result.join('\n');
}
