function castleScore() {
  const scoreElement = document.getElementById("totalScore");
  const castleElement = document.getElementById("castleScore");
  // 自分の key を設定する
  const key = "castle_clear";
  // 今のローカルストレージの中身の取得
  const value = localStorage.getItem(key);
  if (value === null) {
    castleElement.innerText = 0;
    scoreElement.innerText = 0;
  } else {
    castleElement.innerText = value;
    scoreElement.innerText = value;
  }
  console.log(key);
}

castleScore();
