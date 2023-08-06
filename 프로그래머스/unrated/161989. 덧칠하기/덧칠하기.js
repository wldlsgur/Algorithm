function solution(n, m, section) {
  // n : 벽의 길이, m : 룰러 길이, selection : 칠해야할 벽
  let result = 0;

  for(let i=1 ; i<=n ; i++) {
    if(section.includes(i)) {
      result++;

      i = i + m - 1;
    }
  }

  return result;
}

console.log(solution(8, 4, [2, 3, 6]));
// 8	4	[2, 3, 6]	2
// 5	4	[1, 3]	1
// 4	1	[1, 2, 3, 4]	4