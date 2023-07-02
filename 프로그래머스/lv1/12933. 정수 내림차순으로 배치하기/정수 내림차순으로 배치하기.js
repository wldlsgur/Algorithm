function solution(n) {
  return Number([...String(n)].sort((a,b) => {return b-a}).join(""));
}