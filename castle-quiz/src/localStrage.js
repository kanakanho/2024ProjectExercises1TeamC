function setLocalStrages(number) {
  // 自分の key を設定する
  const key = "castle_clear";

  // 今のローカルストレージの中身の取得
  const value = localStorage.getItem(key);

  // ---- 点数を決めるロジックを書く ----
  // 100ptで20とする
  //合計500ptで100となる
  input = Number(value);
  console.log("number", number, "input", input);
  if (number >= 500) {
    output = 100;
  } else if (number >= 400) {
    output = 80;
  } else if (number >= 300) {
    output = 60;
  } else if (number >= 200) {
    output = 40;
  } else if (number >= 100) {
    output = 20;
  } else {
    output = 0;
  }
  // ---- 点数を決めるロジック終了 ----

  // keyと作られた点数を保存する
  localStorage.setItem(key, output);
}

function setTotalStrage(number) {
  // 自分の key を設定する
  const key = "castle_totalScore";
  const value = localStorage.getItem(key);
  // 今のローカルストレージの中身の取得
  input = Number(value);
  output = number + input;
  // ---- 点数を決めるロジック終了 ----

  // keyと作られた点数を保存する
  localStorage.setItem(key, output);
  console.log("number", number, "input", input);
  setLocalStrages(output);
}
// chengeChoice(quizData[quizIndex]);

function scoreClear() {
  const result = confirm("本当に削除しますか");
  if (result) {
    localStorage.clear();
  }
}
