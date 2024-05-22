const moveGameWindow = (gameName) => {
  //ページの遷移だけ
  if (gameName == "game1") {
    console.log("game1");
    window.location = "./quiz/";
  } else if (gameName == "game2") {
    console.log("game2");
    window.location = "./castle-quiz/top.html";
  } else if (gameName == "game3") {
    console.log("game3");
    window.location = "./kanji/";
  } else if (gameName == "game4") {
    console.log("game4");
    window.location = "./dog_quiz/0-menu/";
  } else {
    console.error("ゲームが見つからず遷移できませんでした");
  }
};
