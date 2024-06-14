//JSON.parseにより文字列を配列でローカルストレージから取得
const correctAnswers = JSON.parse(localStorage.getItem("correctAnswers"));
const totalQuestions = correctAnswers.length;

//filterにより、配列の各要素に対してtrueならtrueを返す関数
const correctCount = correctAnswers.filter(
  (element) => element === true
).length;

const resultSummary = document.getElementById("resultSummary");
const gameClear = document.getElementById("gameClear");
resultSummary.textContent = `${totalQuestions}問中${correctCount}問正解！`;
gameClear.textContent = `あと${
  totalQuestions - correctCount
}問正解でゲームクリア`;

//forEachにより、配列の各要素に対して関数を一度ずつ実行する
//forEachメソッドのコールバック関数は、第一引数: 配列の現在の要素、第二引数: 現在の要素のインデックス
correctAnswers.forEach((element, index) => {
  const questionNumber = index + 1;
  //三項演算子(条件式 ? trueの場合の値 : falseの場合の値)
  const resultText = element ? "〇" : "×";
  const resultClass = element ? "correct" : "incorrect";

  const resultItem = document.createElement("div");
  resultItem.innerHTML = `<div class="quiz">${questionNumber}問目: <span class="${resultClass}">${resultText}</span>`;
  const resultDetails = document.getElementById("resultDetails");
  resultDetails.appendChild(resultItem);
});
