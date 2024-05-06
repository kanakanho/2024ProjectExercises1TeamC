const back = () => {
    const result = window.confirm("今までの点数がなくなりますが、本当に戻りますか？");
    if (result) {
        window.location = "./top.html";
    }
}
const questionElement = document.getElementById('question');
const choiceElement = document.getElementById('choice');
const nextButton = document.getElementById("next-btn");
// const answerElement = document.getElementById('answer');
const quizData = [
    {
        question: "日本の首都は？",
        choice: ["東京", "京都", "大阪", "名古屋"],
        answer: "東京"
    },
    {
        question: "世界で一番大きな洋は？",
        choice: ["太平洋", "大西洋", "インド洋", "北極海"],
        answer: "太平洋"
    },
    {
        question: "太陽系で最も大きな惑星は？",
        choice: ["木星", "土星", "地球", "火星"],
        answer: "木星"
    },
    // 他の質問を追加することができます
];
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("choice-btn");
        button.addEventListener("click", () => selectOption(choice));
        optionsElement.appendChild(button);
    });
}
function selectOption(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        alert("正解！");
    } else {
        alert("不正解。正解は" + currentQuestion.answer + "です。");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        alert("クイズ終了！");
        // ここでクイズが終了した後の処理を追加できます
    }
}
nextButton.addEventListener("click", loadQuestion);
loadQuestion(); // 最初の問題を読み込む


