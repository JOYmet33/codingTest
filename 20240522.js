// 직사각형 별찍기
// https://school.programmers.co.kr/learn/courses/30/lessons/12969

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]); // 출력값: a = 5, b =3
  const word = "*".repeat(a); // 여기서부터 코드 작성!
  const box = `${word}\n`;
  console.log(box.repeat(b));
});
