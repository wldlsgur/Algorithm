function solution(want, number, discount) {
  let result = 0;

  discount.forEach((_, index) => {
    const copyArr = discount.slice(index, index + 10);
    let count = 0;

    if (copyArr.length > 10) {
      return;
    }

    for (let i = 0; i < want.length; i++) {
      const itemCount = copyArr.filter(item => item == want[i]).length;
      const needCount = number[i];

      if (itemCount !== needCount) {
        break;
      }

      count += 1;
    }

    if (count === want.length) {
      result += 1;
    }
  });

  return result;
}
