//정수 내림차순으로 배치하기

function solution(n) {
  var answer = 0;
  var str = String(n);
  var arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  }
  arr = arr.sort((a, b) => b - a);
  arr = arr.join("");
  answer = Number(arr);
  return answer;
}
