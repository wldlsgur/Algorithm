function solution(s){
    if(s.length === 4 || s.length === 6){
        return s.match(/[a-zA-Z]/g) ? false : true;
    }
    else return false
}