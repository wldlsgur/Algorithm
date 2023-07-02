function solution(lottos, win_nums) {
    let result = [6,6,5,4,3,2,1]
    var answer = [];
    let sameCnt=0;
    let zeroCnt=0;
        for(let j of lottos){
            if(j===0){
                zeroCnt++;
            }
            else if(win_nums.includes(j)){
                sameCnt++;
            }
        }
    answer.push(result[sameCnt + zeroCnt])
    answer.push(result[sameCnt])
        
    return answer;
}
