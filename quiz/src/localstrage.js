function setLocalStrage(number) {
    const key = "quiz_clear";
    const value = localStorage.getItem(key);
    // 5問正解したらクリア
    // 1問正解した場合
    input = Number(value);
    console.log("number", number, "input", input);
    if (number === 1 || value === null || input < 20) {
        output = 20;
    } else if (number === 2 && input < 40) {
        output = 40;
    } else if (number === 3 && input < 60) {
        output = 60;
    } else if (number === 4 && input < 80) {
        output = 80;
    } else if (number === 5 && input < 100) {
        output = 100;
    } else {
        output = input;
    }
    localStorage.setItem(key, output);
}
