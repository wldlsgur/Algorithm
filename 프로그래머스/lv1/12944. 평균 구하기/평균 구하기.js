function solution(arr) {
  return (
    arr.reduce((arr, value, index) => {
      return (arr += value);
    }, 0) / arr.length
  );
}
