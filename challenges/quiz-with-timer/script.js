const startBtn = document.getElementById("start-btn");
const instructionBtn = document.getElementById("instruction-btn");
const aboutBtn = document.getElementById("about-btn");
const nextBtn = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-btns");
const questionCountElement = document.getElementById("question-count");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");
const scoreContainer = document.getElementById("score-container");

startBtn.addEventListener("click", startQuiz);

let shuffledQuestions, currentQuestionIndex;

//Score
let score = 0;

// Time limit for quiz
const timeLimit = 10;

//Initialize timer
let timeLeft = timeLimit;
let timerId = null;

const containerElement = document.getElementById("container");
containerElement.style.boxShadow = "none";
containerElement.style.backgroundColor = "hsl(200, 100%, 25%)";

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startQuiz() {
  console.log("Started");
  containerElement.style.boxShadow = "0 0 10px 2px";
  containerElement.style.backgroundColor = "#fff";
  startBtn.classList.add("hide");
  instructionBtn.classList.add("hide");
  aboutBtn.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  scoreContainer.classList.remove("hide");
  clearState();
  timeLeft = timeLimit;
  timerElement.textContent = timeLeft;
  clearInterval(timerId);
  startTimer();
  if (shuffledQuestions && shuffledQuestions.length > 0) {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }
}

function showQuestion(question) {
  questionCountElement.innerText = `Question ${currentQuestionIndex + 1} of ${
    questions.length
  }`;
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedAnswer = e.target;
  const correct = selectedAnswer.dataset.correct;

  // Check answer and give scores
  checkAnswer(selectedAnswer, correct);

  //show score
  showScore();

  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
    // Disable button after each selection
    button.disabled = true;
  });

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove("hide");
  } else {
    // startBtn.innerText = "Restart Quiz";
    // startBtn.classList.remove("hide");
    endQuiz();
    showScore();
  }
}

function clearState() {
  clearStatusClass(document.body);
  nextBtn.classList.add("hide");

  //Remove duplicate children
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function startTimer() {
  timerId = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerId);
      currentQuestionIndex++;
      if (
        shuffledQuestions &&
        shuffledQuestions.length >= currentQuestionIndex + 1
      ) {
        setNextQuestion();
      } else {
        showScore();
        endQuiz();
      }
    }
  }, 1000);
}

function endQuiz() {
  // Reset variables
  clearInterval(timerId);
  timeLeft = 0;
  shuffledQuestions = null;
  currentQuestionIndex = null;
  //   score = 0;

  // Hide quiz elements and show start button
  questionContainerElement.classList.add("hide");
  nextBtn.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
  startBtn.classList.remove("hide");

  // Reset container styles
  containerElement.style.boxShadow = "none";
  containerElement.style.backgroundColor = "hsl(200, 100%, 25%)";
}

function checkAnswer(answer, correct) {
  if (answer.dataset.correct) {
    score++;
  }
}

function showScore() {
  scoreElement.innerText = score;
}

const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlink Tool Markup Language", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Cascading Style System", correct: false },
      { text: "Cascading Sheet Styles", correct: false },
      { text: "Cascading Style Syntax", correct: false },
    ],
  },
  {
    question: "What does JS stand for?",
    answers: [
      { text: "JavaScript", correct: true },
      { text: "JavaSyntax", correct: false },
      { text: "JellyScript", correct: false },
      { text: "JavaStyle", correct: false },
    ],
  },
  {
    question: "What is the purpose of HTML?",
    answers: [
      { text: "To define the structure of web pages", correct: true },
      { text: "To style web pages", correct: false },
      { text: "To add interactivity to web pages", correct: false },
      { text: "To communicate with databases", correct: false },
    ],
  },
  {
    question: "What is the purpose of CSS?",
    answers: [
      { text: "To style web pages", correct: true },
      { text: "To define the structure of web pages", correct: false },
      { text: "To add interactivity to web pages", correct: false },
      { text: "To communicate with databases", correct: false },
    ],
  },
  {
    question: "What is the purpose of JavaScript?",
    answers: [
      { text: "To add interactivity to web pages", correct: true },
      { text: "To define the structure of web pages", correct: false },
      { text: "To style web pages", correct: false },
      { text: "To communicate with databases", correct: false },
    ],
  },
  {
    question: "What is the correct syntax for an HTML comment?",
    answers: [
      { text: "<!-- This is a comment -->", correct: true },
      { text: "// This is a comment", correct: false },
      { text: "/* This is a comment */", correct: false },
      { text: "<comment>This is a comment</comment>", correct: false },
    ],
  },
  {
    question: "What is the correct syntax for an external JS file?",
    answers: [
      { text: "<script src='myscript.js'></script>", correct: true },
      {
        text: "<link rel='script' type='text/js' href='myscript.js'>",
        correct: false,
      },
      {
        text: "<head> <script src='myscript.js'></script> </head>",
        correct: false,
      },
    ],
  },
];
