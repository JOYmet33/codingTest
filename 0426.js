// [코딩테스트] 평균 구하기

// <문제 설명> scr: https://school.programmers.co.kr/learn/courses/30/lessons/12944
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// <제한사항>
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.


// # 첫번째 답변
// function solution(arr) {
//     var answer = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//        if (i === 0 ) {
//            answer = arr[i]
//        } else {
//            answer = answer + arr[i]
//        } 
//     }
    
//     answer = answer / arr.length
//     return answer;
// }


// # 두 번째 답변
function solution(arr) {
    var answer = 0;
    
    for (let i = 0; i < arr.length; i++) {
        answer = answer + arr[i]
    }
    
    answer = answer / arr.length
    return answer;
}