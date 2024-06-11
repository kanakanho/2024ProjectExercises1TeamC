//不正解ページに移動
function incorrect(num) {
  location.href = `./${num}-quiz-incorrect.html`;

  //JSON.parseにより文字列を配列でローカルストレージから取得
  let correctAnswers = JSON.parse(localStorage.getItem("correctAnswers"));
  //correctAnswersにfalseを入れる
  correctAnswers.push(false);
  //JSON.stringifyにより配列を文字列でローカルストレージに保存
  localStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));
}
