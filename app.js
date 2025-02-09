let currentQuestionIndex = 0;
let quizData = [];

async function fetchQuizData() {
    const response = await fetch('questions.json');
    quizData = await response.json();
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    questionElement.textContent = quizData[index].question;
    answerElement.textContent = quizData[index].answer;

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === quizData.length - 1;
}

function showNextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

// Initialize the first question
fetchQuizData();
