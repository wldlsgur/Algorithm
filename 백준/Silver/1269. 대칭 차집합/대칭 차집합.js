const inputs = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const [A, B] = inputs.shift().split(' ').map(Number);
    const aSet = inputs.shift().split(' ').map(Number);
    const bSet = inputs.shift().split(' ').map(Number);

    process.stdout.write(solution(A, B, aSet, bSet));
    process.exit();
  });

function solution(A, B, aSet, bSet) {
  const obj = {};
  let result = 0;

  aSet.forEach((value) => (obj[value] = (obj[value] ?? 0) + 1));
  bSet.forEach((value) => (obj[value] = (obj[value] ?? 0) + 1));

  for (let key in obj) {
    if (obj[key] === 1) {
      result += 1;
    }
  }

  return `${result}`;
}
