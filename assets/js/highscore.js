const highScoreList = document.getElementById("highScoresList");
const highScore = JSON.parse(localStorage.getItem("highScores")) || [];

highScoreList.innerHTML = highScore.map(score => {
    return `<li class="high-score-list">${score.name} - ${score.score}</li>`;
})
.join("");