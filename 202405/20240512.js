// 없는 숫자 더하기

// 1차 풀이 : for문, filter, reduce 활용
function solution(numbers) {
  let A = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numbers.length; i++) {
    A = A.filter((element) => element !== numbers[i]);
  }
  return A.reduce((acc, cur) => acc + cur);
}

/* 필터 사용
let filtered 
   = arr.filter((element) => element !== 'b');
   */

// 2차 풀이 : 1차에서 includes 추가
function solution(numbers) {
  let A = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  A = A.filter((element) => !numbers.includes(element));
  return A.reduce((acc, cur) => acc + cur);
}

// 3차 컴퓨터식 카운트
function solution(numbers) {
  let A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    if (numbers.includes(i)) {
      A[i] = 1;
    }
  }
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      sum += i;
    }
  }
  return sum;
}

// 4차 문제를 거꾸로 생각함
function solution(numbers) {
  let sum = 45;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum - numbers[i];
  }
  return sum;
}
