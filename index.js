const moveGameWindow = (gameName) => {
  //ページの遷移だけ
  if (gameName == "game1") {
    console.log("game1");
    window.location = "./quiz/";
  } else if (gameName == "game2") {
    console.log("game2");
    window.location = "./castle-quiz/start.html";
  } else if (gameName == "game3") {
    console.log("game3");
    window.location = "./kanji/start.html";
  } else if (gameName == "game4") {
    console.log("game4");
    window.location = "./dog_quiz/start.html";
  } else {
    console.error("ゲームが見つからず遷移できませんでした");
  }
};

//backgroundWrapperのwidthをローカルストレージの値により変更
function backgroundImg(value) {
  const backElements = document.getElementsByClassName("backgroundWrapper");
  const num = 100 - value;
  for (let element of backElements) {
    element.style.width = `${num}vw`;
    element.style.translate = `-${value/2}vw`;
  }
}

//quiz_clear castle_clear dog_quiz_clear kanji_clear
function getLocalStrages() {
  // 自分の key を設定する
  const quiz_key = "quiz_clear";
  const castle_key = "castle_clear";
  const kanji_key = "kanji_clear";
  const dog_key = "dog_quiz_clear";

  let sum = 0; //ローカルストレージの全ての合計

  // 今のローカルストレージの中身の取得
  const quiz_value = localStorage.getItem(quiz_key);
  const castle_value = localStorage.getItem(castle_key);
  const kanji_value = localStorage.getItem(kanji_key);
  const dog_value = localStorage.getItem(dog_key);
  //各ゲームにスコアが100の時に25点となる
  sum += Number(quiz_value) * 0.25;
  console.log(sum);
  sum += Number(castle_value) * 0.25;
  console.log(sum);
  sum += Number(kanji_value) * 0.25;
  console.log(sum);
  sum += Number(dog_value) * 0.25;
  console.log(sum);
  backgroundImg(sum);
}

getLocalStrages();
//デバック用
function scoreClear() {
  const result = confirm("本当に削除しますか");
  if (result) {
    localStorage.clear();
  }
}
