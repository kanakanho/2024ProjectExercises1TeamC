let quizIndex = 0;
// let count = 0;
localStorage.removeItem("castle_clear");
const quizData = [
  {
    question: "日本で一番大きな天守を持つまたは\n持っていた城はどれか？",
    choice: ["江戸城", "大坂城", "姫路城", "犬山城"],
    answer: "江戸城",
    explanation:
      "江戸時代に3度消失し、1657年以降再建されませんでしたが約45mあったと言われています",
  },
  {
    question: "世界遺産の城はどれか?",
    choice: ["姫路城", "犬山城", "名古屋城", "松本城"],
    answer: "姫路城",
    explanation: "姫路城は1993年に日本の城で唯一の世界遺産に登録されました。",
  },
  {
    question: "ヤマト政権が東北地方の拠点として築いた\n多賀城は何県にあるか?",
    choice: ["宮城県", "秋田県", "奈良県", "滋賀県"],
    answer: "宮城県",
    explanation: "宮城県",
  },
  {
    question:
      "「グスク」は沖縄で作られた城のことであるが、\n「チャシ」とはどの地域で作られた城か？",
    choice: ["北海道", "沖縄県", "長崎県", "小豆島"],
    answer: "北海道",
    explanation: "アイヌ語で砦、館、柵、柵囲いを意味します。",
  },
  {
    question: "豊富秀吉が築いていない城はどれか?",
    choice: ["彦根城", "大坂城", "墨俣一夜城", "伏見城"],
    answer: "彦根城",
    explanation:
      "彦根城は豊臣家が滅ぼされたのちに徳川四天王の一人である井伊直政によって築かれました。",
  },
  {
    question: "国宝でない城はどれか？",
    choice: ["名古屋城", "犬山城", "彦根城", "姫路城"],
    answer: "名古屋城",
    explanation:
      "名古屋城の天守閣は太平洋戦争中に消失してしまったため、国宝ではなくなりました。",
  },
  {
    question: "戊辰戦争の最後の地となった五稜郭はどこか?",
    choice: ["北海道", "京都府", "東京府", "滋賀県"],
    answer: "北海道",
    explanation:
      "徐々に追い詰められた旧幕府軍は徐々に追い詰められたのちに北海道にて終止符が打たれました。",
  },
  {
    question: "織田信長が琵琶湖湖畔に築城した\n五重六階地下一階の城はどれか？",
    choice: ["安土城", "伏見城", "岐阜城", "姫路城"],
    answer: "安土城",
    explanation:
      "琵琶湖湖畔の時点で安土城以外は滋賀県ではないのであり得ません。",
  },
  {
    question: "最後の将軍の徳川慶喜が大政奉還を\n宣言した城はどれか?",
    choice: ["二条城", "江戸城", "大坂城", "姫路城"],
    answer: "二条城",
    explanation: "二条城",
  },
  {
    question: "姫路城は別名なんて呼ばれるか?",
    choice: ["白鷺城", "鳳凰城", "金亀城", "彦根城"],
    answer: "白鷺城",
    explanation:
      "白漆喰で塗られた真っ白な外観が、羽を広げた鷺の姿に似ているため白鷺城と呼ばれていると言われています。",
  },
  {
    question: "城の始まりとされている城はどれか?",
    choice: ["吉野ヶ里遺跡", "多賀城", "姫路城", "三内丸山遺跡"],
    answer: "吉野ヶ里遺跡",
    explanation:
      "弥生時代に集落を守るために堀や柵で囲ったのが城の始まりとされています。",
  },
  {
    question: "信長が築いた城はどれか?",
    choice: ["岐阜城", "観音寺城", "甲府城", "小谷城"],
    answer: "岐阜城",
    explanation: "岐阜城",
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
    explanation:
      "尾張藩が財政難になるたびに鱗を剥がし資金にしていたと言われています。",
  },
  {
    question: "次の城の中で九州じゃない城はどれか?",
    choice: ["萩城", "熊本城", "名護屋城", "岡城"],
    answer: "萩城",
    explanation: "萩城は山口県の城です。",
  },
  {
    question: "別名「海津城」と呼ばれ、川中島の戦いの\n舞台となった城はどれか?",
    choice: ["松本城", "犬山城", "姫路城", "彦根城"],
    answer: "松本城",
    explanation:
      "川中島の戦いは武田信玄と上杉謙信の戦いであることから、長野県北部辺りである松代城だとわかりますよね。",
  },
  {
    question:
      "城から八町離れた村で作られたことが、\n「八丁味噌」の語源とされているが、その城はどれか？",
    choice: ["岡崎城", "犬山城", "松坂城", "名古屋城"],
    answer: "岡崎城",
    explanation: "岡崎は八丁味噌で有名です。",
  },
  {
    question: "現存天守の中で標高の一番高い所に天守が\n立つ城はどれか?",
    choice: ["備中松山城", "松山城", "丸亀城", "宇和島城"],
    answer: "備中松山城",
    explanation: "松山城はは愛媛にある一方で、備中松山城は岡山県にあります。",
  },
  {
    question: "江戸城の石垣の石切場は、主にどこか？",
    choice: ["伊豆", "多摩八王子城", "神田駿河台", "下野大谷"],
    answer: "伊豆",
    explanation:
      "良質な石材の産地で、海上輸送による交通の便の良い伊豆地域が主な採石地として選ばれました。",
  },
  {
    question: "雲海に浮かぶ姿が「天空の城」として\n人気の、兵庫県の城は?",
    choice: ["竹田城", "月山富田城", "姫路城", "彦根城"],
    answer: "竹田城",
    explanation:
      "縄張りが虎が臥せているように見えることから、別名虎臥城とも呼ばれます。",
  },
  {
    question: "熊本城の特徴である「武者返し」とは\n何について表現した言葉？ ",
    choice: ["石垣の形", "鳳凰城内の道の複雑さ", "堀の深さ", "鯱鉾"],
    answer: "石垣の形",
    explanation: "武者が登れないという意味です。",
  },
  {
    question:
      "復元ではなく、江戸時代に建てられた当時のまま天守閣\nが現存している日本の城は、全部で何ヶ所ある？",
    choice: ["12ヶ所", "19ヶ所", "5ヶ所", "8ヶ所"],
    answer: "12ヶ所",
    explanation: "12ヶ所",
  },
  {
    question:
      "城の建物の壁によく開けられている、攻めてくる敵に\n鉄砲や矢を放つための穴は？",
    choice: ["狭間", "曲輪", "破風", "間"],
    answer: "狭間",
    explanation: "狭間には弓矢, 鉄包など用途に応じて様々な形があります。",
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
    explanation: "今も海に接しており、堀で鯛が泳いでいることで有名です。",
  },
  {
    question: "日本で一番最初に国宝に登録された城はどれか?",
    choice: ["名古屋城", "姫路城", "福岡城", "大坂城"],
    answer: "名古屋城",
    explanation: "太平洋戦争で焼失するまでは国宝でした。",
  },
  {
    question: "太平洋戦争時に空襲によって天守が消失した城はどれか",
    choice: ["名古屋城", "姫路城", "福岡城", "大坂城"],
    answer: "名古屋城",
    explanation: "太平洋戦争で焼失するまでは国宝でした。",
  },
  {
    question: "名古屋城の現存していない建物はどれか?",
    choice: ["本丸御殿", "西北隅櫓", "東南隅櫓", "西南隅櫓"],
    answer: "本丸御殿",
    explanation:
      "本丸御殿は太平洋戦争で焼失しましたが、それまでの図面や写真が多く残されていることから完全復元されました。",
  },
  {
    question: "名古屋城の堀に住んでいる動物はどれか",
    choice: ["シカ", "シャチ", "ペンギン", "ニンゲン"],
    answer: "シカ",
    explanation:
      "大奥のペットとして飼われていました。今のシカはアドベンチャーワールドから連れてこられました。",
  },
  {
    question:
      "石垣の積み方のうち、少し加工して隙間を小さい石で\n埋めた名古屋城でも多様されている積み方はどれ?",
    choice: ["野面積み", "自然積", "切込接", "打込接"],
    answer: "野面積み",
    explanation: "野面積み",
  },
  {
    question: "空襲で溶解した名古屋城の金鯱の金の一部で\n作られたのはどれか?",
    choice: ["金の茶釜", "金の延べ棒", "金の扇子", "金時計"],
    answer: "金の茶釜",
    explanation: "金の茶釜と市旗竿頭に使われています。",
  },
  {
    question: "名古屋城の石垣で使われた石の産地ではないのはどれか?",
    choice: ["種子島", "篠島", "竹島", "笈瀬川"],
    answer: "種子島",
    explanation: "種子島",
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
//選択肢の順をシャフル
quizData.forEach((question) => {
  question.choice = shuffleArray(question.choice);
});

// スコアの計算
function score() {
  const key = "count";
  // 今のローカルストレージの中身の取得
  const value = localStorage.getItem(key);
  const totalScore = Number(value) * 10;
  //正解数カウントをしているcountのローカルストレージを削除
  localStorage.removeItem(key);
  console.log(totalScore);
  //スコアをローカルストレージに保存
  totalScores(totalScore);
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
      checkAnswer(choice, quiz.answer, quiz.explanation);
    });
    choiceContainer.appendChild(choiceElement);
  });
}
function sendCorrect(value) {
  //解説の文章をcorrect.htmlに送る
  window.location.href = `correct.html?value=${encodeURIComponent(value)}`;
}
function sendIncorrect(value, ans) {
  //解説の文章をincorrect.htmlに送る
  //正解がどれか送るようにする
  window.location.href = `incorrect.html?value=${encodeURIComponent(
    value
  )}&value=${encodeURIComponent(ans)}`;
}

// 正解か不正解の判定をする
function checkAnswer(choice, answer, explanation) {
  if (answer === choice) {
    //配列のインデックスをカウント
    Index(quizIndex);
    //正解数をカウント
    count();
    sendCorrect(explanation);
  } else {
    //配列のインデックスをカウント
    Index(quizIndex);
    sendIncorrect(explanation, answer);
  }
}

// 次の問題を表示する
function loadNextQuestion() {
  const key = "Index";
  // 今のローカルストレージの中身の取得
  const value = localStorage.getItem(key);
  //Indexと同じにする
  quizIndex = Number(value);
  console.log(quizIndex);
  if (quizIndex < selectedQuizData.length) {
    questionData();
  } else {
    //配列のIndexをカウントしているIndexのローカルストレージを削除
    localStorage.removeItem(key);
    score();
  }
}

// // 初期化処理
// questionData();
loadNextQuestion();
