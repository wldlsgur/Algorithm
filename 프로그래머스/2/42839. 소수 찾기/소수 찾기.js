function solution(numbers) {
  const arr = numbers.split('');
  const result = new Set();

  dfs('', arr, (number) => result.add(number));

  return result.size;
}

function dfs(stringNumber, array, onValid) {
  if (isPrime(Number(stringNumber))) {
    onValid(Number(stringNumber));
  }

  if (array.length === 0) {
    return;
  }

  array.forEach((number, index) => {
    const newArray = [...array];

    newArray.splice(index, 1);
    dfs(stringNumber + number, newArray, onValid);
  });
}

function isPrime(number) {
  if (number <= 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}