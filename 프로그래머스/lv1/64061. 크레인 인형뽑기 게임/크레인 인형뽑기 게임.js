function solution(board, moves) {
  let result = 0;
  let resultList = [];
  for (let i of moves) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][i-1] !== 0) {
        if (board[j][i-1] === resultList[resultList.length - 1]) {
          result += 2;
          resultList.pop();
        } else {
          resultList.push(board[j][i-1]);
        }
        board[j][i-1] = 0;
        break;
      }
    }
  }
  return result;
}
