let checkSosu = (target) => {
  let len = Math.sqrt(target);
  for (let i = 2; i <= len; i++) {
    if (target % i === 0) {
      return false;
    }
  }
  return true;
};
function solution(nums) {
  var answer = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let z = j + 1; z < len; z++) {
        let sum = nums[i] + nums[j] + nums[z];
        if (checkSosu(sum)) {
          answer++;
        }
      }
    }
  }
  console.log(answer);
  return answer;
}