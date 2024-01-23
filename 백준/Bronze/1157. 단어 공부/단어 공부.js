const inputs = [];
require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', line => {
        inputs.push(line.trim());
    })
    .on('close', () => {
        const str = inputs.shift();

        console.log(solution(str));
        process.exit();
    });

function solution(str) {
    const countObj = [...str.toUpperCase()].reduce((acc, cur) => {
        if (!acc[cur]) {
            acc[cur] = 0;
        }

        acc[cur] = acc[cur] + 1;

        return acc;
    }, {});

    const counts = Object.values(countObj);
    const maxCount = Math.max(...counts);
    const maxCounts = counts.filter(value => value === maxCount);

    if (maxCounts.length > 1) {
        return '?';
    }

    for (const key in countObj) {
        if (maxCount === countObj[key]) {
            return key;
        }
    }
}
