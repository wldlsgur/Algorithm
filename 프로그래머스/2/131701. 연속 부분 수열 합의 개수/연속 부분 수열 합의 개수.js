
function solution(elements) {
  const result = new Set();
  const combinedArray = [...elements, ...elements];

  elements.forEach((_, startIndex) => {
    let sum = 0;
    elements.forEach((_, endIndex) => {
      sum += combinedArray[startIndex + endIndex];
      result.add(sum);
    });
  });

  return result.size;
}
