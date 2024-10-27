const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const str = inputs.shift();

    console.log(solution(str));
    process.exit();
  });

function solution(str) {
  const alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
  let result = str;

  for (const str of alphabet) {
    result = result.replaceAll(str, '*');
  }

  return result.length;
}
