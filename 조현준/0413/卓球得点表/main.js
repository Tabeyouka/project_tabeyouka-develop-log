const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winningScore');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

// 버튼이 눌렸을때 점수가 갱신되어야한다.
p1.button.addEventListener('click', function() {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function() {
    updateScores(p2, p1);
})

resetButton.addEventListener('click', reset)

// this로 callback함수가 설정된 요소를 사용가능
winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
