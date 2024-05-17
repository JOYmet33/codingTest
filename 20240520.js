// 문자열 다루기 기본

// 1차 시도 => 오류
function solution(s) {
  let answer = Number(s);
  return !4 ? true : false;
}
console.log(solution("a1234"));
// (문자+숫자) 랜덤 숫자 중에는 "10e1"처럼 숫자 자체를 나타내는 조합이 있기 때문

// 2차 시도 => 결론: 정규표현식 배워야 풀 수 있음
function solution(s) {
  isRightLength = s.length === 4 || s.length === 6;
  return isRightLength && !/[A-Za-z]/.test(s);
}
