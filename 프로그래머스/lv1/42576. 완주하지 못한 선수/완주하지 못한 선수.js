function solution(participant, completion) {
    participant.sort()
    completion.sort()
    
    console.log(participant, completion)
    for(let i in participant){
        if(!(participant[i] === completion[i])){
            return participant[i]
        }
    }
}