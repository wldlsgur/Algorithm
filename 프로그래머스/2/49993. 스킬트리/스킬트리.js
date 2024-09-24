function solution(skill, skill_trees) {
  let result = skill_trees.length;

  skill_trees.forEach((skill_tree) => {
    const queue = [...skill];

    for (let i = 0; i < skill_tree.length; i += 1) {
      const str = skill_tree[i];

      if (!queue.includes(str)) {
        continue;
      }

      if (queue.shift() !== str) {
        result -= 1;
        break;
      }
    }
  });

  return result;
}
