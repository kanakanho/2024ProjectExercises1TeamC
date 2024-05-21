let score = 0;
let inputValue;
let userName,
  [] = ["太郎", "花子", "花子", "花子", "花子"];
let questionnumber = 1;
const question = ["呪術", "混沌", "権化", "隻眼", "喰種"];
const answer = ["じゅじゅつ", "こんとん", "ごんげ", "せきがん", "ぐーる"];
function getText() {
  inputValue = document.querySelector(".quiz-answer");
  console.log(inputValue.value);
}

function pushEnter() {
  judge();
  changeUI();
}
function judge() {
  console.log("ボタン押した");
  console.log("判定", inputValue.value, answer[questionnumber - 1]);
  if (inputValue.value == answer[questionnumber - 1]) {
    alert("正解！！");
    score += 100;
  } else {
    alert("残念！！不正解！！");
    if (100 < score) score -= 100;
    else score = 0;
  }
  console.log(score);
}

function changeUI() {
  if (questionnumber < 5) {
    console.log(questionnumber);
    var a = document.getElementById("qn").textContent;

    document.getElementById("qn").textContent =
      "第" + [questionnumber + 1] + "問";
    document.getElementById("qs").textContent = question[questionnumber];
    questionnumber += 1;
  } else {
    document.getElementById("qn").textContent = "終了です。お疲れ様でした。";
    document.getElementById("qs").textContent =
      "あなたのスコアは" + score + "です。";
    setLocalStrage();
  }
  //div#input-form内の一番下の要素を取得
  inputValue.value = "";
}
function setLocalStrage() {
  // 自分の key を設定する
  const key = "kanji_clear";

  if (0 < score === 100) {
    output = 20;
  } else if (score === 200) {
    output = 40;
  } else if (score === 300) {
    output = 60;
  } else if (score === 400) {
    output = 80;
  } else if (score === 500) {
    output = 100;
  } else {
    output = 0;
  }

  // keyと作られた点数を保存する
  localStorage.setItem(key, output);
}
