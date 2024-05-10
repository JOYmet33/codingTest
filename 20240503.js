// 정수 제곱근 판별
function solution(n) {
  var answer = -1;
  for (let x = 1; x * x <= n; x++) {
    if (n === x * x) {
      answer = (x + 1) * (x + 1);
    }
  }
  return answer;
}
