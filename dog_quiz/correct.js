//正解ページに移動
function correct(num) {
  location.href = `./${num}-quiz-correct.html`;

  //ローカルストレージに得点を代入
  let value = parseInt(localStorage.getItem("dog_quiz_clear"));
  value += 10;
  localStorage.setItem("dog_quiz_clear", value.toString());

  //JSON.parseにより文字列を配列でローカルストレージから取得
  let correctAnswers = JSON.parse(localStorage.getItem("correctAnswers"));
  //correctAnswersにtrueを入れる
  correctAnswers.push(true);
  //JSON.stringifyにより配列を文字列でローカルストレージに保存
  localStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));
}
