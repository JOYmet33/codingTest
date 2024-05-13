// 제일 작은 수 제거하기
function solution(arr) {
  arr = arr.filter((element) => element !== Math.min(...arr));
  return arr.length === 0 ? [-1] : arr;
}
