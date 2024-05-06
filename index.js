const moveGameWindow = (gameName) => {
  //ページの遷移だけ
  if (gameName == "game1") {
    console.log("game1");
    window.location = "https://sushida.net/";
  } else if (gameName == "game2") {
    console.log("game2");
    window.location =
      "https://ja.wikipedia.org/wiki/%E3%83%9A%E3%83%B3%E3%82%AE%E3%83%B3";
  } else if (gameName == "game3") {
    console.log("game3");
    window.location = "https://www.aeonpet.com/topics/pet-column_50.html";
  } else if (gameName == "game4") {
    console.log("game4");
    window.location = "https://www.akkodis.co.jp/candidate/insight/column_30";
  } else {
    console.error("ゲームが見つからず遷移できませんでした");
  }
};
