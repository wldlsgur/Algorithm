function solution(x) {
  var answer = true;
  let xArr = [...String(x)];
  let hap = xArr.reduce((arr, current, index) => {
    return (arr += Number(current));
  }, 0);
  x % hap === 0 ? (answer = true) : (answer = false);
  return answer;
}