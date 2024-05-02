let n = 123

function solution(n) {
    var answer = 0;
    var letter = String(n)
    for (let i = 0; i < letter.length; i++) {
        answer = answer + Number(letter[i])
    }
    return answer;
}

// 123 12.3 3
// 12 1.2 2
// 1 0.1 1
function solution2(n) {
    var answer = 0;
    var temp = n;
    for (let i = 0; i < String(n).length; i++) {
        let digit = temp % 10 // 숫자의 마지막 자리 수를 빼내는 방법
        answer = answer + digit
        temp = Math.floor(temp/10);
    }
    
    return answer;
}
console.log(solution2(n))