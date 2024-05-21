// import { score, scorecount } from "./score";

//問題のカウント
let quizIndex = 0;
// 正解数のカウント
let count = 0;
//問題の入れる
const quizData = [
  {
    question: "日本で一番大きな天守を持つまたは持っていた城はどれか？",
    choice: ["江戸城", "大坂城", "姫路城", "犬山城"],
    answer: "江戸城",
  },
  {
    question: "世界遺産の城はどれか?",
    choice: ["姫路城", "犬山城", "名古屋城", "松本城"],
    answer: "姫路城",
  },
  {
    question: "ヤマト政権が東北地方の拠点として築いた多賀城は何県にあるか?",
    choice: ["宮城県", "秋田県", "奈良県", "滋賀県"],
    answer: "宮城県",
  },
  {
    question:
      "「グスク」は沖縄で作られた城のことであるが、「チャシ」とはどの地域で作られた城か？",
    choice: ["北海道", "沖縄県", "長崎県", "小豆島"],
    answer: "北海道",
  },
  {
    question: "豊富秀吉が築いていない城はどれか?",
    choice: ["彦根城", "大坂城", "墨俣一夜城", "伏見城"],
    answer: "彦根城",
  },
  {
    question: "国宝でない城はどれか？",
    choice: ["名古屋城", "犬山城", "彦根城", "姫路城"],
    answer: "名古屋城",
  },
  {
    question: "戊辰戦争の最後の地となった五稜郭はどこか?",
    choice: ["北海道", "京都府", "東京府", "滋賀県"],
    answer: "北海道",
  },
  {
    question: "織田信長が琵琶湖湖畔に築城した、五重六階地下一階の城はどれか？",
    choice: ["安土城", "伏見城", "岐阜城", "姫路城"],
    answer: "安土城",
  },
  {
    question: "最後の将軍の徳川慶喜が大政奉還を宣言した城はどれか?",
    choice: ["二条城", "江戸城", "大坂城", "姫路城"],
    answer: "二条城",
  },
  {
    question: "姫路城は別名なんて呼ばれるか?",
    choice: ["白鷺城", "鳳凰城", "金亀城", "彦根城"],
    answer: "白鷺城",
  },
];
//戻った時にスコアをゼロポイントにする.
// const returnTop = () => {
//   const result = window.confirm(
//     "今までの点数がなくなりますが、本当に戻りますか？"
//   );
//   if (result) {
//     window.location = "./top.html";
//     count = 0;
//   }
// };
//スコアの計算
function score() {
  const totalScore = count * 10;
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
    window.alert(`不正解  正解${answer}です`);
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
