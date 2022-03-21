//Get game elements
const question = document.getElementsByClassName('question-label');
const choices = document.getElementsByClassName('answer-choice');
const progressText = document.getElementsByClassName('current-question');
const scoreText = document.getElementsById('score');

//Set values for current question and score
let currentQuestion = {};
let correctAnswer = true;
let score = 0;
let questionCounter = [];
let availableQuestions = [];

//Choose questions
let questions = [
    {
        question: "Where does Norrland's comes from?",
        choice1: 'Sweden',
        choice2: 'Norway',
        choice3: 'Denmark',
        choice4: 'Finland',
        answer: 1,
    },
    {
        question: "Where does Smålands's comes from?",
        choice1: 'Sweden',
        choice2: 'Norway',
        choice3: 'Denmark',
        choice4: 'Finland',
        answer: 1,
    },
    {
        question: "Random question 3",
        choice1: 'Sweden',
        choice2: 'Norway',
        choice3: 'Denmark',
        choice4: 'Finland',
        answer: 4,
    },
    {
        question: "This is a another random Q",
        choice1: 'Sweden',
        choice2: 'Norway',
        choice3: 'Denmark',
        choice4: 'Finland',
        answer: 3,
    },
    {
        question: "What questions should I use?",
        choice1: 'Sweden',
        choice2: 'Norway',
        choice3: 'Denmark',
        choice4: 'Finland',
        answer: 2,
    }
];


const SCORE_POINTS = 100;
const MAX_QUESTIONS = 12;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}