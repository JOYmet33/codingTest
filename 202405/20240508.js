//서울에서 김서방 찾기

function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      return "김서방은 " + i + "에 있다";
    }
  }
}
