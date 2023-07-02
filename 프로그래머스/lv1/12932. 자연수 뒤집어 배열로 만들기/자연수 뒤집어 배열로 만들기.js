function solution(n) {
  let arr = [...String(n)];
  return arr.map((value, index) => {
    return Number(arr[arr.length - 1 - index]);
  });
}