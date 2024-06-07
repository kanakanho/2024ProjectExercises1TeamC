function totalScores(number) {
  // 自分の key を設定する
  const key = "castle_clear";

  // 今のローカルストレージの中身の取得
  const value = localStorage.getItem(key);

  // ---- 点数を決めるロジックを書く ----
  // 10ptで10とする
  if (number === 100) {
    output = 100;
  } else if (number === 90) {
    output = 90;
  } else if (number === 80) {
    output = 80;
  } else if (number === 70) {
    output = 70;
  } else if (number === 60) {
    output = 60;
  } else if (number === 50) {
    output = 50;
  } else if (number === 40) {
    output = 40;
  } else if (number === 30) {
    output = 30;
  } else if (number === 20) {
    output = 20;
  } else if (number === 10) {
    output = 10;
  } else {
    output = 0;
  }
  // ---- 点数を決めるロジック終了 ----

  // keyと作られた点数を保存する
  localStorage.setItem(key, output);
}

function Index(number) {
  // 自分の key を設定する
  const key = "Index";
  // 今のローカルストレージの中身の取得
  const value = localStorage.getItem(key);
  // ---- 点数を決めるロジックを書く ----
  // output = Number(value);
  // console.log("number", number, "output", output);
  // keyと作られた点数を保存する
  number += 1;
  localStorage.setItem(key, number);
}
function count() {
  // 自分の key を設定する
  const key = "count";
  // 今のローカルストレージの中身の取得
  const value = localStorage.getItem(key);
  // ---- 点数を決めるロジックを書く ----
  output = Number(value);
  // console.log("number", number, "output", output);
  // keyと作られた点数を保存する
  output += 1;
  localStorage.setItem(key, output);
}
