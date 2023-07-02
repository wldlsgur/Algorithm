function solution(food) {
  let left = "";
  let right = "";

  for(let i=1 ; i<food.length ; i++){
    let count = food[i] % 2 === 0 ? food[i] / 2 : (food[i] - 1) / 2;

    for(let j=0 ; j<count ; j++){
      left = `${left}${i}`;
      right = `${i}${right}`;
    }
  }

  return `${left}${0}${right}`
}