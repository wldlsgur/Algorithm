const inputs = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const [N, M] = inputs.shift().split(' ').map(Number);
    const nStr = inputs.splice(0, N);
    const mStr = inputs.splice(0, M);

    process.stdout.write(solution(N, M, nStr, mStr));
    process.exit();
  });

function solution(N, M, nStr, mStr) {
  const setNStr = new Set(nStr);
  let result = 0;

  mStr.forEach(str => setNStr.has(str) && result++);

  return String(result);
}
