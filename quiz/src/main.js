function changeStage(stageNumber) {
    if (stageNumber === -1) {
        setTimeout(() => {
            location.href = `./quiz/clear.html`;
        }, 1300);
    } else {
        stageNumber++;
        // wait
        setTimeout(() => {
            location.href = `./quiz/quiz${stageNumber}.html`;
        }, 1300);
    }
}
