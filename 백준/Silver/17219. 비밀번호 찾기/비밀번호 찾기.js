const inputs = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', line => {
    inputs.push(line.trim());
  })
  .on('close', () => {
    const [N, M] = inputs.shift().split(' ').map(Number);
    const siteInfo = inputs.splice(0, N).map(value => value.split(' '));
    const searchSiteInfo = inputs;

    process.stdout.write(solution(N, M, siteInfo, searchSiteInfo));
    process.exit();
  });

function solution(N, M, siteInfo, searchSiteInfo) {
  const map = new Map();
  const result = [];

  siteInfo.forEach(([name, password]) => {
    map.set(name, password);
  });

  searchSiteInfo.forEach(name => {
    result.push(map.get(name));
  });

  return result.join('\n');
}
