// 부족한 금액 계산하기
function solution(price, money, count) {
  let answer = 0;
  for (let i = 1; i <= count; i++) {
    answer = answer + price * i;
  }
  answer = answer - money;
  return answer < 0 ? 0 : answer;
}
