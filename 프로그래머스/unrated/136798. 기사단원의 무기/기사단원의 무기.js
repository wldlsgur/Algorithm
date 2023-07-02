function solution(number, limit, power) {
    let result = 0;

    for(let i=1 ; i<=number ; i++){
        let attack = 0;
        for (let j = 1; j <= Math.sqrt(i) ; j++) {
           if (i % j === 0) {
             if (i / j === j) attack += 1;
             else attack += 2;
           }
        }
        attack > limit ? result += power : result += attack;
    }
    return result;
}