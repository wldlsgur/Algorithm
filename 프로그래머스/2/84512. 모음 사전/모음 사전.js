const alphabet = ['A', 'E', 'I', 'O', 'U'];
let count = 0;
let flag = false;

function solution(word) {
  dfs('', word);

  return count;
}

function dfs(str, word) {
  if ((str.length > 5) | flag) {
    return;
  }

  if (str === word) {
    return (flag = true);
  }

  count += 1;

  for (let i = 0; i < 5; i += 1) {
    dfs(str + alphabet[i], word);
  }
}
