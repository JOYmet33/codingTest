//두 정수 사이의 합
function solution(a, b) {
  var answer = 0;
  if (b < a) {
    var c = a;
    a = b;
    b = c;
  }

  for (let i = a; i <= b; i++) {
    answer = answer + i;
  }
  return answer;
}
