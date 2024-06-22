function solution(clothes) {
  let result = 1;
  const obj = clothes.reduce((acc, [item, type]) => {
    if (!acc[type]) {
      acc[type] = 0;
    }
    acc[type] += 1;

    return acc;
  }, {});

  for (const key in obj) {
    result *= obj[key] + 1;
  }

  return result - 1;
}