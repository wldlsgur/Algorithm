const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const tc = Number(inputs.shift());

    for (let i = 0; i < tc; i++) {
      const n = Number(inputs.shift());
      const cloths = inputs.splice(0, n).map(cloth => cloth.split(' '));

      process.stdout.write(solution(n, cloths));
    }

    process.exit();
  });

function solution(n, cloths) {
  const map = new Map();
  let result = 1;

  cloths.forEach(([name, type]) => {
    const prevData = map.get(type);

    prevData ? map.set(type, prevData + 1) : map.set(type, 1);
  });

  map.forEach(value => {
    const wear = value;
    const nonWear = 1;

    result *= wear + nonWear;
  });

  return (result - 1).toString() + '\n';
}
