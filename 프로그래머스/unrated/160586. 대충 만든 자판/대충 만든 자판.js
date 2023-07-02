function solution(keymap, targets) {
  var answer = [];

  outerLoop: for(const arr of targets){//target 문자열
    let sumIndex = 0;

    for (const char of arr) {//target 문자
        let indexArr = []; //key 배열에 최소 인덱스 값 저장

        for(const keyArr of keymap){//key 문자열
            let index = keyArr.indexOf(char);//key 하나의 문자열 중 taget 문자의 최소 인덱스

            if(index !== -1){//target문자가 있을때만 push
                indexArr.push(index + 1);
            }
        }

        if (!indexArr[0]) {
            answer.push(-1);
            continue outerLoop;
        }

        let minIndex = Math.min(...indexArr);
        sumIndex += minIndex;
    }
    answer.push(sumIndex);
  }
  return answer;
}