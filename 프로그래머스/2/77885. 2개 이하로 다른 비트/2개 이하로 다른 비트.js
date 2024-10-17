function solution(numbers) {
  return numbers.map((value) => {
    if (value % 2 === 0) {
      return value + 1;
    }

    const binaryString = '0' + value.toString(2);
    const zeroIndex = binaryString.lastIndexOf('0');

    return parseInt(
      `${binaryString.slice(0, zeroIndex)}10${binaryString.slice(
        zeroIndex + 2
      )}`,
      2
    );
  });
}