function solution(numbers) {
    const result = numbers.map(value => String(value))
    .sort((a, b) => (b + a) - (a + b)).join("");

    return result[0] === "0" ? "0" : result;
}

console.log(solution([6, 10, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"