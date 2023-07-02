function solution(nums) {
  let select = nums.length / 2;
  let set = new Set(nums);
  console.log(select, set.size);
  if (select <= set.size) {
    return select;
  } else {
    return set.size;
  }
}