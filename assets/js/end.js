const username = document.getElementById("username");
const saveBtn = document.getElementById("saveBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerText = mostRecentScore;

function saveHighScore(event) {
    event.preventDefault();
}
