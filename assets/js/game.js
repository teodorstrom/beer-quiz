//Get game elements
const question = document.getElementById('question-label');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('current-question');
const scoreText = document.getElementById('score');

//Declare and set start values for current question and score
let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let questionCounter = [];
let availableQuestions = [];

//Questions
let questions = [
    {
        question: "WHICH COUNTRY IS THE BIGGEST CONSUMER OF BEER (PER PERSON)?",
        choice1: 'Austria',
        choice2: 'Czech Republic',
        choice3: 'Germany',
        choice4: 'Romania',
        answer: 2,
    },
    {
        question: "FROM WHICH COUNTRY DOES CORONA BEER ORIGINATE?",
        choice1: 'Mexico',
        choice2: 'Spain',
        choice3: 'Brazil',
        choice4: 'Dominican Republic',
        answer: 1,
    },
    {
        question: "WHERE WAS PILSNER INVENTED?",
        choice1: 'Czech Republic',
        choice2: 'Germany',
        choice3: 'Belgium',
        choice4: 'Denmark',
        answer: 1,
    },
    {
        question: "WHAT IS THE NAME OF GERMANY'S FAMOUS STRONG BEER FESTIVAL?",
        choice1: 'Oktoberfest',
        choice2: 'Schreckliches Bierfest',
        choice3: 'Starkbierfest',
        choice4: 'Beerapalooza',
        answer: 3,
    },
    {
        question: "WHICH ANCIENT CIVILISATION IS SAID TO HAVE BEEN THE FIRST TO MAKE BEER?",
        choice1: 'The Babylonians',
        choice2: 'The Saxons',
        choice3: 'The Klaxons',
        choice4: 'The Sumerians',
        answer: 4,
    },
    {
        question: "WHAT CITY IS THE WORLD'S BIGGEST BEER FESTIVAL HELD IN?",
        choice1: 'Slough, United Kingdom',
        choice2: 'Munich, Germany',
        choice3: 'Prague, Czech Republic',
        choice4: 'Amsterdam, Netherlands',
        answer: 2,
    },
    {
        question: "WHICH AFRICAN NATION IS FAMOUS FOR BOTH ITS LARGE DESERT AND LOVE FOR DRINKING BEER?",
        choice1: 'Marocco',
        choice2: 'Sudan',
        choice3: 'Algeria',
        choice4: 'Namibia',
        answer: 4,
    },
    {
        question: "WHY DO MANY BEERS LOSE FLAVOUR WHEN SERVED COLD?",
        choice1: 'Cold temperatures dull your tongue',
        choice2: 'Cold dissolves sugars in the beer',
        choice3: ' Cold kills the yeast in the beer',
        choice4: 'Cold makes the bubbles start to oxygenate',
        answer: 1,
    },
    {
        question: "WHATS THE DEFINING CHARACTERISTIC OF A SESSION BEER?",
        choice1: "You're only allowed to drink them on stag do's",
        choice2: 'More hoppy than other beers',
        choice3: 'Lower alcohol content than other beers',
        choice4: 'Distinctive fruity flavour',
        answer: 3,
    }
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = questions.length;

/**
 * This function starts the game
 */
function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}


/**
 * This function gets a new question,
 * randomize questions, updating questionCounter,
 * sends the player to the end page for input of username and highscore
 */
function getNewQuestion() {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('https://teodorstrom.github.io/beer-quiz/end.html');

    }

    questionCounter++;
    progressText.innerText = `${questionCounter} / ${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText =  currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswer = true;
}


/**
 * Apply background color for correct / incorrect answers
 * Sets a timeout for 1s before automatically moving to next question
 */
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswer) return;

        acceptingAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === "correct") {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
        }, 1000)
    });
});

/**
 * Update score
 */
incrementScore = num => {
    score += num;
    scoreText.innerText = ['Score: ' + score];
};

startGame()