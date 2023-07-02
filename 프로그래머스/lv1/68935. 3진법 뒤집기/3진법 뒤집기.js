function solution(n) {
    let threeN = n.toString(3)
    let reversed = threeN.split('').reverse().join('');
    let result = parseInt(reversed, 3).toString(10)
    return Number(result);
}