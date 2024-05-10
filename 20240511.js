//핸드폰 번호 가리기

function solution(phone_number) {
  let l = phone_number.length;
  let m = phone_number.slice(l - 4);
  let h = "*".repeat(l - 4);
  var answer = h + m;
  return answer;
}
