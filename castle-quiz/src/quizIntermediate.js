//問題のカウント
let quizIndex = 0;
// 正解数のカウント
let count = 0;
//問題の入れる
const quizData = [
  {
    question: "城の始まりとされている城はどれか?",
    choice: ["吉野ヶ里遺跡", "多賀城", "姫路城", "三内丸山遺跡"],
    answer: "吉野ヶ里遺跡",
  },
  {
    question: "信長が築いた城はどれか?",
    choice: ["岐阜城", "観音寺城", "甲府城", "小谷城"],
    answer: "岐阜城",
  },
  {
    question: "名古屋城が金鯱で有名な理由で正しいものはどれか?",
    choice: [
      "金板を使っているから",
      "金鯱がここしかないから",
      "金鯱が盗まれたから",
      "鯱鉾の発祥だから",
    ],
    answer: "金板を使っているから",
  },
  {
    question: "次の城の中で九州じゃない城はどれか?",
    choice: ["萩城", "熊本城", "名護屋城", "岡城"],
    answer: "萩城",
  },
  {
    question: "別名「海津城」と呼ばれ、川中島の戦いの舞台となった城はどれか?",
    choice: ["松本城", "犬山城", "姫路城", "彦根城"],
    answer: "松本城",
  },
  {
    question:
      "城から八町離れた村で作られたことが、「八丁味噌」の語源とされているが、その城はどれか？",
    choice: ["岡崎城", "犬山城", "松坂城", "名古屋城"],
    answer: "岡崎城",
  },
  {
    question: "現存天守の中で標高の一番高い所に天守が立つ城はどれか?",
    choice: ["備中松山城", "松山城", "丸亀城", "宇和島城"],
    answer: "備中松山城",
  },
  {
    question: "江戸城の石垣の石切場は、主にどこか？",
    choice: ["伊豆", "多摩八王子城", "神田駿河台", "下野大谷"],
    answer: "伊豆",
  },
  {
    question: "雲海に浮かぶ姿が「天空の城」として人気の、兵庫県の城は?",
    choice: ["竹田城", "月山富田城", "姫路城", "彦根城"],
    answer: "竹田城",
  },
  {
    question:
      "熊本城の特徴である「武者むしゃ返し」とは、何について表現した言葉？",
    choice: ["石垣の形", "鳳凰城内の道の複雑さ", "堀の深さ", "鯱鉾"],
    answer: "石垣の形",
  },
];
//スコアの計算
function score() {
  const totalScore = count * 20;
  window.alert("スコア: " + totalScore);
  setTotalStrage(totalScore);
  window.location = "score.html";
}
//問題の読み込み
window.addEventListener("load", () => {
  console.log(quizIndex);
  questionData();
});
//クイズの問題の表示
function questionData() {
  questionElement.innerText = quizData[quizIndex].question;
}

const questionElement = document.getElementById("question");
const nextElement = document.getElementById("next");

function chengeChoice(quiz) {
  //idのchoiceを取得する
  const choiceContainer = document.getElementById("choices");
  choiceContainer.innerHTML = "";
  //quizData配列の中にあるchoice配列の中を繰り返す
  quiz.choice.forEach((choice) => {
    //ボタンタグを生成
    const choiceElement = document.createElement("button");
    //quizクラスを生成
    choiceElement.classList.add("quiz");
    //choice配列の各要素を一つずつ表示する
    choiceElement.textContent = choice;
    //choice配列の各要素を選択したときに、答えと選択した問題をcheckAnswer(判定を行う関数)に送る
    choiceElement.addEventListener("click", () => {
      //答えの判定関数に選択した要素と答えを渡す。
      checkAnswer(choice, quiz.answer);
    });
    choiceContainer.appendChild(choiceElement);
  });
}

//正解か不正解の判定をする
function checkAnswer(choice, answer) {
  //ここを変えたい
  if (answer === choice) {
    // popupWrapper.style.display = "block";
    window.alert("正解");
    count++;
  } else {
    window.alert("不正解 正解は" + answer + "です");
    console.log(answer);
  }
  loadNextQuestion();
}
function nextButton() {
  //次の問題を表示する
  loadNextQuestion();
}
//問題を選択したら次の問題に変更する
function loadNextQuestion() {
  quizIndex++;
  if (quizIndex < quizData.length) {
    chengeChoice(quizData[quizIndex]);
    questionData();
  } else {
    alert("問題が終了しました。");
    score();
  }
}
chengeChoice(quizData[quizIndex]);
