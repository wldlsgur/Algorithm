function solution(s) {
  const result = [];
  s = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'));
  s.sort((a, b) => a.length - b.length);

  s.forEach((array) => {
    array.forEach((number) => {
      if (result.includes(number)) {
        return;
      }

      result.push(number);
    });
  });

  return result;
}