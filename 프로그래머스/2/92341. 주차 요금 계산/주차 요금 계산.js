function solution([baseTime, basePrice, unitTime, unitPrice], records) {
  const result = [];
  const record = {};
  const timeRecord = {};
  const limitTime = 23 * 60 + 59;

  records.forEach((value) => {
    const [time, number, history] = value.split(' ');
    const [hour, minute] = time.split(':');
    const newTime = parseInt(hour, 10) * 60 + parseInt(minute, 10);

    if (history === 'IN') {
      record[number] = { time: newTime, history };
    }

    if (history === 'OUT') {
      const hasTimeRecord = timeRecord[number];

      hasTimeRecord
        ? (timeRecord[number] += newTime - record[number].time)
        : (timeRecord[number] = newTime - record[number].time);
      delete record[number];
    }
  });

  for (const key in record) {
    timeRecord[key] = (timeRecord[key] || 0) + limitTime - record[key].time;
  }

  for (const key in timeRecord) {
    const time = timeRecord[key];

    if (time <= baseTime) {
      result.push({ key, price: basePrice });
    } else {
      result.push({
        key,
        price: basePrice + Math.ceil((time - baseTime) / unitTime) * unitPrice,
      });
    }
  }

  const prices = result
    .sort((a, b) => a.key.localeCompare(b.key))
    .map(({ price }) => price);

  return prices;
}