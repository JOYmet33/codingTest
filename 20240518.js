// 문자열 내림차순으로 배치하기

let s = "Zbcdefg";

function solution(s) {
  const answer = s.split("").sort().reverse().join("");
  return answer;
}
console.log(solution(s));

// split("") ==> 배열인 array를 기준("")에 따라 하나씩 찢는 메소드
// sort() ==> 배열인 array를 A->Z, 1->10 오름차순으로 정렬하는 메소드
//        ==> 내림차순 정렬 : sort(a, b) => b-a
// reverse() ==> array의 배열을 반대로 바꾸는 메소드
// join() ==> 배열인 array를 문자열로 바꾸는 메소드
