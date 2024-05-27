function changeStage(stageNumber) {
    if (stageNumber === -1) {
        setTimeout(() => {
            location.href = `./clear.html`;
        }, 1300);
    } else {
        stageNumber++;
        console.log(`./quiz${stageNumber}.html`);
        // wait
        setTimeout(() => {
            location.href = `./quiz${stageNumber}.html`;
        }, 1300);
    }
}
