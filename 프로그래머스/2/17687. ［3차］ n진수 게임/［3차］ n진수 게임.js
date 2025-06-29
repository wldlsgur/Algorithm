function solution(n, t, m, p) {
  const max = m * t;
  let str = '';
  let result = '';

  for (let i = 0; str.length < max; i += 1) {
    str += i.toString(n).toUpperCase();
  }
    
  let cnt = 0;

  while (result.length < t) {
    const sliceStr = str.substring(cnt, cnt + m);

    result += sliceStr[p - 1];
    cnt += m;
  }

  return result;
}