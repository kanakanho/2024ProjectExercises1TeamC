function castleScore() {
  const scoreElement = document.getElementById("totalScore");
  // 自分の key を設定する
  const key = "castle_clear";
  // 今のローカルストレージの中身の取得
  const value = localStorage.getItem(key);
  if (value === null) {
    scoreElement.innerText = 0;
  } else {
    scoreElement.innerText = value;
  }
  console.log(key);
}

castleScore();
