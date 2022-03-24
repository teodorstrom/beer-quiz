const username = document.getElementById("username");
const saveBtn = document.getElementById("saveBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveBtn.disabled = !username.value;
})

function saveHighScore(event) {
    event.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a,b) => {
        return b.score - a.score;
    });
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));

    window.location.assign("/index.html");
}
saveHighScore();