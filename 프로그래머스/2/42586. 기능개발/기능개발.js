function solution(progresses, speeds) {
  const result = [0];
  const days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  let maxDay = days[0];
  let resultIndex = 0;

  days.forEach((day) => {
    if (day <= maxDay) {
      return (result[resultIndex] += 1);
    }

    resultIndex += 1;
    maxDay = day;
    result[resultIndex] = 1;
  });

  return result;
}
