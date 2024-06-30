function solution(k, dungeons) {
  const visited = new Array(dungeons.length).fill(false);
  const answer = [];

  function dfs(fatigue, count) {
    dungeons.forEach((dungeon, index) => {
      if (visited[index]) {
        return;
      }

      const [needFatigue, decreaseFatigue] = dungeon;

      if (needFatigue > fatigue) {
        return;
      }

      visited[index] = true;
      dfs(fatigue - decreaseFatigue, count + 1);
      visited[index] = false;
    });

    answer.push(count);
  }

  dfs(k, 0);

  return Math.max(...answer);
}
