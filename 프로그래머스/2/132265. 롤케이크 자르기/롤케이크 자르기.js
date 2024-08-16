function solution(topping) {
  const olderBrother = new Map();
  const brother = new Map();
  let result = 0;

  topping.forEach((value) => {
    const count = olderBrother.get(value) || 0;

    olderBrother.set(value, count + 1);
  });

  topping.forEach((value) => {
    const brotherCount = brother.get(value) || 0;
    const olderBrotherCount = olderBrother.get(value);

    brother.set(value, brotherCount + 1);
    olderBrother.set(value, olderBrotherCount - 1);

    if (olderBrotherCount === 1) {
      olderBrother.delete(value);
    }

    if (brother.size === olderBrother.size) {
      result += 1;
    }
  });

  return result;
}
