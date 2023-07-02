function solution(babbling) {
    const canTalk = ["aya", "ye", "woo", "ma"];
    let result = 0;

    for(let i=0 ; i<babbling.length ; i++){
        let word = babbling[i].toString();

        for(let j=0 ; j<canTalk.length ; j++){
            if(word.includes(canTalk[j].repeat(2))){
                break;;
            }
            word = word.split(canTalk[j]).join(" ");
        }
        if (word.split(" ").join("").length === 0) {
          result++;
        }
    }
    return result;
}
// solution(["aya", "yee", "u", "maa"]);
// solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]);

/* 
    babblin의 한 항목에 대해서 사용할 수 있는 단어로 조합할 수 있는지 검사
    반복해서 나오는 단어이면 불가능 처리

    만약 babllin 항목에 사용할 수 있는 단어가 있다면 babllin 단어 길이의 값에서 사용할 수 있는 단어 길이를 빼준다
    길이가 0이 되는 순간이 아기가 옹알이 할 수 있는 단어로 판정 된다.

    1차 : 1 11 14 16 17 실패
    원인 : 공백의 유무?? 공백의 길이까지 계산한다면 그럴 수 있다.
    해결 : trim()함수를 이용하여 공백을 제거 후 길이를 계산
    결과 : 결과는 똑같다. 실패 trim()함수는 문자열 양 끝의 공백만 제거해준다.

    해결2 : 문자 길이를 계산하되 해당하는 단어가 있으면 길이 만큼 문자를 삭제해서 문자가 0이 되면 카운트
    결과 : 문자가 2번 반복되면 break 그 후 문자가 포함되면 포함된 부분을 split으로 잘라서 공백으로 채운다, 모든 단어를 검사하고 word를 다시 다 붙여서 검사후 길이가 0 이면 가능한 단어로 판단하면 성공
*/