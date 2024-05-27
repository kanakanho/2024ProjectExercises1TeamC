let quizIndex = 0;
let count = 0;

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

// 配列をシャッフルする関数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// クイズデータをシャッフルし、最初の10問を選択
const shuffledQuizData = shuffleArray(quizData);
//クイズを１から１０問格納
const selectedQuizData = shuffledQuizData.slice(0, 10);

// スコアの計算
function score() {
  const totalScore = count * 10;
  window.alert("スコア: " + totalScore);
  setTotalStrage(totalScore);
  window.location = "score.html";
}

// クイズの問題の表示
function questionData() {
  const questionElement = document.getElementById("question");
  questionElement.innerText = selectedQuizData[quizIndex].question;
  chengeChoice(selectedQuizData[quizIndex]);
}

function chengeChoice(quiz) {
  const choiceContainer = document.getElementById("choices");
  choiceContainer.innerHTML = "";
  quiz.choice.forEach((choice) => {
    const choiceElement = document.createElement("button");
    choiceElement.classList.add("quiz");
    choiceElement.textContent = choice;
    choiceElement.addEventListener("click", () => {
      checkAnswer(choice, quiz.answer);
    });
    choiceContainer.appendChild(choiceElement);
  });
}

// 正解か不正解の判定をする
function checkAnswer(choice, answer) {
  if (answer === choice) {
    window.alert("正解");
    count++;
  } else {
    window.alert(`不正解  正解は${answer}です`);
  }
  loadNextQuestion();
}

function nextButton() {
  const resultElement = document.getElementById("result");
  //次の問題を表示する
  loadNextQuestion();
}

// 次の問題を表示する
function loadNextQuestion() {
  quizIndex++;
  if (quizIndex < selectedQuizData.length) {
    questionData();
  } else {
    alert("問題が終了しました。");
    score();
  }
}

// 初期化処理
questionData();
