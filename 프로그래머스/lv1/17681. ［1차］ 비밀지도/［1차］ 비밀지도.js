function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i in arr1){
        let map1 = arr1[i].toString(2).padStart(n,"0")
        let map2 = arr2[i].toString(2).padStart(n,"0")
        let row = "";
        for(let j=0 ; j<n ; j++){
            if(map1[j] === "1" || map2[j] === "1"){
                row += "#"
            }
            else{
                row += " "
            }
        }
        answer.push(row);
        row = ""
    }
    return answer;
}