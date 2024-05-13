// 수박수박수박수박수박수?

//1차 풀이
function solution(n) {
  var answer = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      answer = answer + "박";
    } else {
      answer = answer + "수";
    }
  }
  return answer;
}

// 2차 풀이 - 삼항 연산자 활용
function solution(n) {
  var answer = "";
  for (let i = 0; i < n; i++) {
    i % 2 !== 0 ? (answer += "박") : (answer += "수");
  }
  return answer;
}
