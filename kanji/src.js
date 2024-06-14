let score = 0;
let inputValue;
let questionnumber = 1;
const question = ["呪術", "混沌", "権化", "隻眼", "喰種"];
const answer = ["じゅじゅつ", "こんとん", "ごんげ", "せきがん", "ぐーる"];
const questionnumberkey = "kanjiquizquestionnumber";
const scorekey = "score";
function getText() {
  inputValue = document.querySelector(".quiz-answer");
  console.log(inputValue.value);
}

function pushEnter() {
  judge();
}
function judge() {
  console.log("ボタン押した");
  console.log("判定", inputValue.value, answer[questionnumber - 1]);
  const scoretext = localStorage.getItem(scorekey);
  score = Number(scoretext);
  if (inputValue.value == answer[questionnumber - 1]) {
    score += 20;
    setquestionnumber();
    setscore();
    window.location.href = "correct.html"; // 通常の遷移
  } else {
    if (20 < score) score -= 20;
    else score = 0;
    setquestionnumber();
    setscore();
    window.location.href = "uncorrect.html"; // 通常の遷移
  }
  console.log(score);
}
const qnElement = document.getElementById("qn");
function changeUI() {
  const scoretext = localStorage.getItem(scorekey);
  score = Number(scoretext);
  const questionnumbertext = localStorage.getItem(questionnumberkey);
  questionnumber = Number(questionnumbertext);
  if (questionnumber < 5) {
    console.log(questionnumber);
    qnElement.textContent = "第" + [questionnumber + 1] + "問";
    document.getElementById("qs").textContent = question[questionnumber];
    questionnumber += 1;
  } else {
    qnElement.textContent = "Result";
    document.getElementById("qs").textContent = "スコア：" + score;
    //要素を削除
    const form = document.getElementById("Form");
    if (form) {
      form.remove();
    }
    createButton();
    localStorage.setItem(questionnumberkey, "0");
    setLocalStrage();
    localStorage.setItem(scorekey, "0");
  }
  //div#input-form内の一番下の要素を取得
  inputValue.value = "";
}
function setLocalStrage() {
  // 自分の key を設定する
  const key = "kanji_clear";

  if (0 < score === 20) {
    output = 20;
  } else if (score === 40) {
    output = 40;
  } else if (score === 60) {
    output = 60;
  } else if (score === 80) {
    output = 80;
  } else if (score === 100) {
    output = 100;
  } else {
    output = 0;
  }

  // keyと作られた点数を保存する
  localStorage.setItem(key, output);
}
function gonext() {
  window.location.href = "index.html"; // 通常の遷移
}
function setquestionnumber() {
  localStorage.setItem(questionnumberkey, questionnumber);
}
function setscore() {
  localStorage.setItem(scorekey, score);
}
function changeUI2() {
  const questionnumbertext = localStorage.getItem(questionnumberkey);
  questionnumber = Number(questionnumbertext);
  if (questionnumber - 1 < 5) {
    console.log(questionnumber);
    document.getElementById("qs").textContent = question[questionnumber - 1];
    questionnumber += 1;
  } else {
    qnElement.textContent = "終了です。お疲れ様でした。";
    document.getElementById("qs").textContent =
      "あなたのスコアは" + score + "です。";
    //要素を削除
    const form = document.getElementById("Form");
    if (form) {
      form.remove();
    }
    createButton();
    localStorage.setItem(questionnumberkey, "0");
    setLocalStrage();
  }
  //div#input-form内の一番下の要素を取得
  const input = document.getElementById("form");
  if (input) {
    input.value = answer[questionnumber - 2];
  }
}
function createButton() {
  console.log("createButton");
  // ボタン要素を作成
  const button = document.createElement("button");
  button.textContent = "リトライ";

  // ボタンに onclick 属性を設定
  button.onclick = function () {
    gonext(); // この関数はページをリロードするか、次のページに進むようにする
  };

  // ボタンのスタイルを設定
  button.style.width = "200px"; // ボタンの横幅を200ピクセルに設定
  // ページの一番下にボタンを追加
  document.body.appendChild(button);
}
