function solution(array, commands) {
  return commands.map((value, index) => {
    return array.slice(commands[index][0] - 1, commands[index][1]).sort((a,b)=>{return a-b})[
      commands[index][2] - 1
    ];
  });
}