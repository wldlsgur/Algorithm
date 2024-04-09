const inputs = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const str = inputs.shift();
    const explosionStr = inputs.shift();

    process.stdout.write(solution(str, explosionStr));
    process.exit();
  });

function solution(str, explosionStr) {
  const explosionStrLength = explosionStr.length;
  const lastExplosionChar = explosionStr[explosionStrLength - 1];
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    stack.push(currentChar);

    if (currentChar === lastExplosionChar) {
      const lastStr = stack.slice(-explosionStrLength).join('');

      if (lastStr === explosionStr) {
        for (let j = 0; j < explosionStrLength; j++) {
          stack.pop();
        }
      }
    }
  }

  return stack.length ? stack.join('') : 'FRULA';
}
