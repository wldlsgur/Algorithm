function solution(prices) {
  return prices.map((price, i) => {
    for (let j = i + 1; j < prices.length; j += 1) {
      if (price > prices[j]) {
        return j - i;
      }
    }
    return prices.length - i - 1;
  });
}