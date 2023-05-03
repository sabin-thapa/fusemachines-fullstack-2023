const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-btns");
const questionCountElement = document.getElementById('question-count')


startBtn.addEventListener("click", startQuiz);

let shuffledQuestions, currentQuestionIndex;

const containerElement = document.getElementById('container')
containerElement.style.boxShadow = 'none';
containerElement.style.backgroundColor = 'hsl(145, 100%, 25%)';

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startQuiz() {
  console.log("Started");
  containerElement.style.boxShadow = "0 0 10px 2px";
  containerElement.style.backgroundColor = '#fff';
  startBtn.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  clearState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionCountElement.innerText = `Question ${currentQuestionIndex+1} of ${questions.length}`;
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
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove("hide");
  } else {
    startBtn.innerText = "Restart Quiz";
    startBtn.classList.remove("hide");
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

const questions = [
  {
    question: "What is the full form of OOP?",
    answers: [
      { text: "Object Oriented Programming", correct: true },
      { text: "Object O Programming", correct: false },
      { text: "Object Oriented P", correct: false },
      { text: "Object OO PP", correct: false },
    ],
  },
  {
    question: "What is the full form of HTML?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Object O Programming", correct: false },
      { text: "Object Oriented P", correct: false },
      { text: "Object OO PP", correct: false },
    ],
  },
  {
    question: "What is the full form of CSS?",
    answers: [
      { text: "Object Oriented Programming", correct: true },
      { text: "Object O Programming", correct: false },
      { text: "Cascading Style Sheet", correct: false },
      { text: "Object OO PP", correct: false },
    ],
  },
  {
    question: "What is the full form of FTP?",
    answers: [
      { text: "Object Oriented Programming", correct: false },
      { text: "Object O Programming", correct: false },
      { text: "Object Oriented P", correct: false },
      { text: "File Transfer Protocol", correct: true },
    ],
  },
  {
    question: "What is the full form of XML?",
    answers: [
      { text: "Object Oriented Programming", correct: false },
      { text: "Extensible Markup Language", correct: true },
      { text: "Object Oriented P", correct: false },
      { text: "Object OO PP", correct: false },
    ],
  },
];
