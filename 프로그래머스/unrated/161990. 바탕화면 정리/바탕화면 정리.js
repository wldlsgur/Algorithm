function solution(wallpaper) {
  const result = [];
  const xLength = wallpaper[0].length;
  const yLength = wallpaper.length;

  const [leftY, leftX] = findLeftPath(wallpaper, xLength, yLength);
  const [rightY, rightX] = findRightPath(wallpaper, xLength, yLength);
  const [upY, upX] = findUpPath(wallpaper, xLength, yLength);
  const [downY, dwonX] = findDownPath(wallpaper, xLength, yLength);

  result.push(upY);
  result.push(leftX);
  result.push(downY + 1);
  result.push(rightX + 1);

  console.log(result);
  return result;
}
// 가장 왼쪽에 위치한 파일 찾기
function findLeftPath(wallpaper, xLength, yLength) {
  for(let i=0 ; i<xLength ; i++) {
    for(let j=0 ; j<yLength ; j++) {
      if(wallpaper[j][i] === "#") {
        return [j, i];
      }
    }
  }
}
// 가장 오른쪽에 위치한 파일 찾기
function findRightPath(wallpaper, xLength, yLength) {
  for(let i=xLength - 1 ; i>=0 ; i--) {
    for(let j=0 ; j<yLength ; j++) {
      if(wallpaper[j][i] === "#") {
        return [j, i];
      }
    }
  }
}
// 가장 위쪽에 위치한 파일 찾기
function findUpPath(wallpaper, xLength, yLength) {
  for(let i=0 ; i<yLength ; i++) {
    for(let j=0 ; j<xLength ; j++) {
      if(wallpaper[i][j] === "#") {
        return [i, j];
      }
    }
  }
}
// 가장 아래쪽에 위치한 파일 찾기
function findDownPath(wallpaper, xLength, yLength) {
  for(let i=yLength - 1 ; i>=0 ; i--) {
    for(let j=0 ; j<xLength ; j++) {
      if(wallpaper[i][j] === "#") {
        return [i, j];
      }
    }
  }
}
console.log(solution([".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."]));
// [".#...", "..#..", "...#."]	[0, 1, 3, 4]
// ["..........", ".....#....", "......##..", "...##.....", "....#....."]	[1, 3, 5, 8]
// [".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."]	[0, 0, 7, 9]
// ["..", "#."]	[1, 0, 2, 1]