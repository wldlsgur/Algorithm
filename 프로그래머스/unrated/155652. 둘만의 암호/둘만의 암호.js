function solution(s, skip, index) {
    let answer = "";

    for(let char of s){
        let asciiCode = char.charCodeAt(0);

        for(let i=0 ; i<index ; i++){
            while(true){
                asciiCode++;
                if(asciiCode > 122){
                    asciiCode = 97;
                }
                if(!skip.includes(String.fromCharCode(asciiCode))){
                    break;
                }
            }
        }
        answer += String.fromCharCode(asciiCode);
    }
    return answer;
}