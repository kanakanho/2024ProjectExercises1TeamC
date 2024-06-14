//次のクイズに移動
function nextQuiz() {
  //JSON.parseにより文字列を配列でローカルストレージから取得
  const quizzes = JSON.parse(localStorage.getItem("quizzes"));

  //parseIntにより文字列を整数で取得
  let currentQuizIndex = parseInt(localStorage.getItem("currentQuizIndex"));

  //次のクイズ番号に進む
  currentQuizIndex += 1;

  //次のクイズが存在するかどうかをチェック
  if (currentQuizIndex < quizzes.length) {
    //次のクイズ番号をローカルストレージに保存
    localStorage.setItem("currentQuizIndex", currentQuizIndex.toString());
    location.href = quizzes[currentQuizIndex];
  } else {
    location.href = "result.html";
  }
}
