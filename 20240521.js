// 행렬의 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/12950

// 1차 시도
function solution(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      arr1[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return arr1;
}

// 2차 시도 ---- 만약 원본을 보존하겠다면...?
function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer.push([]);
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}
