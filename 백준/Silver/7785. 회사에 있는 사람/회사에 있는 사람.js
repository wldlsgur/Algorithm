const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const n = Number(inputs.shift());
    const records = inputs.map(value => value.split(' '));

    process.stdout.write(solution(n, records));
    process.exit();
  });

function solution(n, records) {
  const set = new Set();

  records.forEach(([name, record]) => {
    if (record === 'enter') {
      set.add(name);
    }

    if (record === 'leave') {
      set.delete(name);
    }
  });

  return [...set].sort().reverse().join('\n');
}
