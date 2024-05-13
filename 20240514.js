// 가운데 글자 가져오기

function solution(s) {
  if (s.length % 2 === 0) {
    let index = s.length / 2;
    let answer = s.slice(index - 1, index + 1);
    return answer;
  }
  let answer = s[(s.length - 1) / 2];
  return answer;
}
