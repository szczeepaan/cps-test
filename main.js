const clickArea = document.querySelector('#clickarea');
const clickCountDisplay = document.querySelector('#clickCountDisplay');
const timeSelections = document.querySelectorAll('.timeSelect');
const timer = document.querySelector('#timer');
const endPage = document.querySelector('#endpage');
let timerInterval = null;

let clickCount = 0;
let time = 1000;
let timeCounter = 0;

timeSelections.forEach((element) => {
    element.addEventListener('click', () => {
        timeSelections.forEach(value => {
            value.classList.remove('selected');
        });
        element.classList.add('selected');
        time = parseInt(element.value);
    });
});

clickArea.addEventListener('click', clickEvent);

function clickEvent() {
    clickCount++;
    if (clickCount == 1) {
        timerInterval = setInterval(gameHandler, 100);
    }
    clickCountDisplay.innerHTML = `${clickCount} clicks.`;
}

function gameHandler() {
    if (timeCounter == time) {
        endPage.style.setProperty('display', 'flex');
        clickArea.removeEventListener('click', clickEvent);
        endPage.innerHTML = `<h1>Test ended</h1><p>You scored ${clickCount / (time / 1000)} CPS on the ${time / 1000} second test</p><a href='index.html'>Play again</a>`;
        clickCount = 0;
        clearInterval(timerInterval);
        timeCounter = 0;
        return;
    }
    timeCounter += 100;
    timer.innerHTML = `${timeCounter / 1000} s`;
}