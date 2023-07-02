function solution(k, score) {
    let hallOfFame = [];
    let result = [];

    for(let i=0 ; i<score.length ; i++){
        if(i+1 <= k){
            hallOfFame.push(score[i]);
            result.push(Math.min(...hallOfFame));
            if(i+1 === k) hallOfFame.sort((a, b) => b - a);
        } 
        else{
            for(let j=0 ; j<k ; j++){
                if(hallOfFame[j] <= score[i]){
                    hallOfFame.splice(j, 0, score[i]);
                    result.push(hallOfFame[k - 1]);
                    break;
                }
                else if(j === k-1){
                    result.push(hallOfFame[k - 1]);
                }
            }
        }
    }
    return result;
}