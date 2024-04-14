const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const str = inputs.shift();

    process.stdout.write(solution(str));
    process.exit();
  });

function solution(str) {
  const result = [];

  str.split(/(<[^>]*>)/).forEach(value => {
    if (value[0] === '<') {
      return result.push(value);
    }

    let newStr = '';

    value.split(' ').forEach(value => {
      newStr += [...value].reverse().join('') + ' ';
    });

    result.push(newStr.trim());
  });

  return result.join('');
}
