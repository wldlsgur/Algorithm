function solution(n, t, m, p) {
  const maxLength = m * t; // 전체 인원이 말하는 최대 문자 수 (튜브 순서 포함해서 t개 확보하기 위해)
  let allSequence = '';    // 0부터 n진수로 변환된 모든 숫자를 이어붙일 문자열
  let result = '';         // 튜브가 말해야 하는 문자들을 저장할 결과 문자열

  // 0부터 시작해서 n진수로 바꾸고 전부 이어붙임 (최소 maxLength 만큼 확보될 때까지)
  for (let i = 0; allSequence.length < maxLength; i++) {
    allSequence += i.toString(n).toUpperCase(); // toUpperCase는 A~F 대문자 대응
  }

  // 튜브가 말하는 순서(p)에 맞는 문자를 m 간격으로 뽑아 t개 저장
  for (let i = 0; result.length < t; i++) {
    const index = i * m + (p - 1); // p번째 사람의 순서는 (p - 1)번 인덱스
    result += allSequence[index];
  }

  return result;
}
