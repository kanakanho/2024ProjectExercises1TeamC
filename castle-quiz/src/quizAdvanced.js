//問題のカウント
let quizIndex = 0;
// 正解数のカウント
let count = 0;
//問題の入れる
const quizData = [
  {
    question:
      "復元ではなく、江戸時代に建てられた当時のまま天守閣が現存している日本の城は、全部で何ヶ所ある？",
    choice: ["12ヶ所", "19ヶ所", "5ヶ所", "8ヶ所"],
    answer: "12ヶ所",
  },
  {
    question:
      "城の建物の壁によく開けられている、攻めてくる敵に鉄砲や矢を放つための穴は？",
    choice: ["狭間", "曲輪", "破風", "間"],
    answer: "狭間",
  },
  {
    question: "愛媛県にある今治城や、香川県にある高松城の特徴は？",
    choice: [
      "堀に海水を引いている",
      "城全体が五角の星形である",
      "本丸や二の丸の御殿が残っている",
      "鯱鉾が銀色である",
    ],
    answer: "堀に海水を引いている",
  },
  {
    question: "日本で一番最初に国宝に登録された城はどれか?",
    choice: ["名古屋城", "姫路城", "福岡城", "大坂城"],
    answer: "名古屋城",
  },
  {
    question: "名古屋城の現存していない建物はどれか?",
    choice: ["本丸御殿", "西北隅櫓", "東南隅櫓", "西南隅櫓"],
    answer: "本丸御殿",
  },
  {
    question: "名古屋城の堀に住んでいる動物はどれか",
    choice: ["シカ", "シャチ", "ペンギン", "ニンゲン"],
    answer: "シカ",
  },
  {
    question:
      "石垣の積み方のうち、少し加工して隙間を小さい石で埋めた名古屋城でも多様されている積み方はどれ?",
    choice: ["野面積み", "自然積", "切込接", "打込接"],
    answer: "野面積み",
  },
  {
    question: "江戸城の石垣の石切場は、主にどこか？",
    choice: ["伊豆", "多摩八王子城", "神田駿河台", "下野大谷"],
    answer: "伊豆",
  },
  {
    question: "空襲で溶解した名古屋城の金鯱の金の一部で作られたのはどれか?",
    choice: ["金の茶釜", "金の延べ棒", "金の扇子", "金時計"],
    answer: "金の茶釜",
  },
  {
    question: "名古屋城の石垣で使われた石の産地ではないのはどれか?",
    choice: ["種子島", "篠島", "竹島", "笈瀬川"],
    answer: "種子島",
  },
];

//スコアの計算
function score() {
  const totalScore = count * 30;
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
const resultElement = document.getElementById("result");
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
