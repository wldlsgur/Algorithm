function solution(str1, str2) {
  const arr1 = [];
  const arr2 = [];
  let intersection = 0;
  let union = 0;

  for (let i = 0; i < str1.length - 1; i += 1) {
    const str = str1.substr(i, 2);

    if (str.match(/[A-Za-z]{2}/)) {
      arr1.push(str.toLowerCase());
    }
  }

  for (let i = 0; i < str2.length - 1; i += 1) {
    const str = str2.substr(i, 2);

    if (str.match(/[A-Za-z]{2}/)) {
      arr2.push(str.toLowerCase());
    }
  }

  const set = new Set([...arr1, ...arr2]);

  set.forEach((str) => {
    const has1 = arr1.filter((x) => x === str).length;
    const has2 = arr2.filter((x) => x === str).length;

    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });

  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}