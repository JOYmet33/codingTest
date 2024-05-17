// 콜라츠 추측

function solution(num) {
  var answer = 0;
  for (let i = 0; i <= 500; i++) {
    if (num === 1) {
      return i;
    } else if (num % 2 === 0) {
      num = num / 2;
    } else if (num % 2 !== 0) {
      num = num * 3 + 1;
    }
  }
  return -1;
}
