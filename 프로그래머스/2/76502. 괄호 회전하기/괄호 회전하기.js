function solution(s) {
  let result = 0;
  const arr = [...s];
  const copyArr = [...arr];

  if (compare(copyArr)) {
    console.log('ture');
    result += 1;
  }

  for (let i = 1; i < arr.length; i += 1) {
    copyArr.push(copyArr.shift());

    if (compare(copyArr)) {
      result += 1;
    }
  }

  return result;
}

function compare(arr) {
  const copyArr = [...arr];
  const stack = [];

  for (let i = 0; i < copyArr.length; i += 1) {
    const str = copyArr[i];
    const lastStr = stack[stack.length - 1];

    if (str === '(' || str === '[' || str === '{') {
      stack.push(str);
      continue;
    }

    if (!lastStr) {
      return false;
    }

    if (str === ')' && lastStr === '(') {
      stack.pop();
    }

    if (str === ']' && lastStr === '[') {
      stack.pop();
    }

    if (str === '}' && lastStr === '{') {
      stack.pop();
    }
  }

  return stack.length === 0;
}
