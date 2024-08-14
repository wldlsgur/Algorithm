function solution(msg) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const dictionary = [];
  const result = [];

  for (let i = 0; i < 26; i += 1) {
    dictionary.push(alphabet[i]);
  }

  for (let i = 0; i < msg.length; i += 1) {
    let longestWord;
    let nextWord;
    let nextIndex;

    for (let j = i; j < msg.length; j += 1) {
      const word = msg.substring(i, j + 1);

      if (dictionary.includes(word)) {
        nextWord = msg.substring(i, j + 2);
        longestWord = word;
        nextIndex = j;
      }
    }

    result.push(dictionary.findIndex((value) => value === longestWord) + 1);

    if (longestWord !== nextWord) {
      dictionary.push(nextWord);
    }

    i = nextIndex;
  }

  return result;
}