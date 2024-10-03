function solution(record) {
  return record.sort((a, b) => {
    const aHead = a.match(/^\D+/)[0].toLowerCase();
    const bHead = b.match(/^\D+/)[0].toLowerCase();

    if (aHead !== bHead) {
      return aHead.localeCompare(bHead);
    }

    const aNum = a.match(/\d+/)[0].replace(/^0+/, '');
    const bNum = b.match(/\d+/)[0].replace(/^0+/, '');

    return aNum - bNum;
  });
}
