function solution(arr, divisor) {
  let newArr = arr
    .filter((value, index) => {
      if (value % divisor === 0) return value;
    })
    .sort((a, b) => {
      return a - b;
    });

  return !newArr[0] ? [-1] : newArr;
}