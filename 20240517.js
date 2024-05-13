//약수의 개수와 덧셈
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let arr = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        arr += 1;
      }
    }
    arr % 2 === 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}
