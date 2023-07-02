function solution(cards1, cards2, goal) {
    let answer = "Yes";

    goal.forEach((value, index) => {
        if(cards1[0] === value && cards1){
            cards1.shift();
        }
        else if(cards2[0] === value && cards2){
            cards2.shift();
        }
        else{
            answer = "No";
            return;
        }
    })
    
    return answer;
}