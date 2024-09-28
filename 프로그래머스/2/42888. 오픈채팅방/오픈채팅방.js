function solution(record) {
  const database = {};
  const result = [];

  record.forEach((value) => {
    const [order, id, name] = value.split(' ');

    if (order !== 'Leave') {
      database[id] = name;
    }

    if (order === 'Enter') {
      result.push(`${id}님이 들어왔습니다.`);
    }

    if (order === 'Leave') {
      result.push(`${id}님이 나갔습니다.`);
    }

    if (order === 'Change') {
      database[id] = name;
    }
  });

  return result.map((value) => {
    const [id, rest] = value.split('님');

    return `${database[id]}님${rest}`;
  });
}