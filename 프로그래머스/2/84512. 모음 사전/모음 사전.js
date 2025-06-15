function solution(targetWord) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  const state = { totalCount: 0, isMatched: false };

  function recursion(currentWord) {
    if (currentWord === targetWord) {
      state.isMatched = true;
      return;
    }

    if (currentWord.length >= 5 || state.isMatched) {
      return;
    }

    for (let i = 0; i < vowels.length; i += 1) {
      state.totalCount += 1;
      recursion(currentWord + vowels[i]);

      if (state.isMatched) {
        return;
      }
    }
  }

  recursion('');

  return state.totalCount;
}
