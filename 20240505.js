//하샤드 수

function solution(x) {
  var str = String(x);
  var sum = 0;
  var ref = x;
  for (let i = 0; i < str.length; i++) {
    sum = sum + (x % 10);
    x = Math.floor(x / 10);
  }
  return ref % sum === 0;
}
