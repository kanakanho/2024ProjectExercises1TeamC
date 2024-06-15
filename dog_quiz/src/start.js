//クイズの配列
const quizzes = [
  "1-quiz.html",
  "2-quiz.html",
  "3-quiz.html",
  "4-quiz.html",
  "5-quiz.html",
  "6-quiz.html",
  "7-quiz.html",
  "8-quiz.html",
  "9-quiz.html",
  "10-quiz.html",
];

//シャッフル関数
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//クイズの配列をシャッフルする
shuffle(quizzes);

//JSON.stringifyにより配列を文字列でローカルストレージに保存
localStorage.setItem("quizzes", JSON.stringify(quizzes));
//ローカルストレージの初期値
localStorage.setItem("currentQuizIndex", "0");
localStorage.setItem("correctAnswers", "[]");

function clickCenterButton() {
  localStorage.setItem("dog_quiz_clear", "0");
  document
    .getElementsByClassName("circleBox")[0]
    .classList.add("popOutAnimation");
  setTimeout(() => {
    location.href = quizzes[0];
  }, 1300);
}
