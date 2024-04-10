const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const str = inputs.shift();

    process.stdout.write(solution(str));
    process.exit();
  });

function solution(str) {
  const set = new Set([...str]);

  for (let i = 0; i < str.length; i += 1) {
    for (let j = i; j < str.length; j += 1) {
      if (i === j) {
        continue;
      }

      const slicedStr = str.substring(i, j + 1);

      set.add(slicedStr);
    }
  }

  return String(set.size);
}
