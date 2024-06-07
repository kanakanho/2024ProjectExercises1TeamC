//parseIntにより文字列を整数で取得
let currentQuizIndex = parseInt(localStorage.getItem("currentQuizIndex"));
//現在のクイズ番号
currentQuizIndex += 1;
document.getElementById("quizNumber").innerText = currentQuizIndex;
