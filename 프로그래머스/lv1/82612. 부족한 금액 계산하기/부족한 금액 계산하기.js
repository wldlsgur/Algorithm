function solution(price, money, count) {
    var answer = 0;
    
    for(let i=1 ; i<=count ; i++){
        console.log(price* i)
        answer += price * i
    }
    if(answer < money){
        return 0;
    }
    
    return answer-money;
}