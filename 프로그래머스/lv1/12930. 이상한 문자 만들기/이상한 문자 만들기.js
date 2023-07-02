function solution(s) {
  let arr = s.split(" ");
  return arr.map((value, index) => {
    return [...value]
      .map((value, index) => {
        return index % 2 === 0 ? value.toUpperCase() : value.toLowerCase();
      }).join("");
  }).join(" ");
}