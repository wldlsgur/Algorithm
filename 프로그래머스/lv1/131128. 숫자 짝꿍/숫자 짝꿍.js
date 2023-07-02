function solution(X, Y) {
  var answer = "";

  X = [...X];
  Y = [...Y];

  for (let i = 0; i < 10; i++) {
    const X_cnt = X.filter((item) => Number(item) === i).length;
    const Y_cnt = Y.filter((item) => Number(item) === i).length;
    answer += i.toString().repeat(Math.min(X_cnt, Y_cnt)); //둘 중 1개만 있으면 적은개 0이니깐 X 2, 3으로 중복 숫자가 있으면 최소 2개는 있어야 하니 min은 2
  }
  //console.log(answer);
  if (answer === "") {
    return "-1";
  } else if (answer.match(/[^0]/g) === null) {
    //0이 아닌 숫자를 선택, 0이 젤 큰숫자이면 결국 0뿐이다
    return "0";
  } else {
    return [...answer]
      .sort((a, b) => {
        return b - a;
      })
      .join("");
  }
}