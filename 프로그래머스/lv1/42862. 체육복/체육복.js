function solution(n, lost, reserve) {
    var answer = n-(lost.length);
    let reserveCntList = {}
    for(let i of reserve){
        if(!lost.includes(i)){
            reserveCntList[i] = 2;
        }else if(lost.includes(i)){
            answer += 1;
            lost.splice(lost.indexOf(i), 1);
        }
    }
    lost.sort((a,b)=>{return a-b;})
    for(let i of lost){
        if(reserve.includes(i-1) && reserveCntList[i-1] === 2){
            console.log(i, i-1)
            answer += 1;
            reserveCntList[i-1]--;
        }
        else if(reserve.includes(i+1) && reserveCntList[i+1] === 2){
            console.log(i, i+1)
            answer += 1;
            reserveCntList[i+1]--;
        }
    }
    return answer;
}