function solution(N, stages) {
  var answer = [];
  let challenge = stages.length;
  let stageCnt;

  for (let i = 1; i <= N; i++) {
    stageCnt = 0;
    for (let j of stages) {
      if (i === j) {
        stageCnt++;
      }
    }
    answer.push([i, stageCnt / challenge]);
    challenge = challenge - stageCnt;
  }
  answer.sort(function (a, b) {
    return b[1] - a[1];
  });

  return  answer.map((value, index) => {
      return value[0]
  });
}

//n+1 = 모든 스테이지 클리어 사용자
