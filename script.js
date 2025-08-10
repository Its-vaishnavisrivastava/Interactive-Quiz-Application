const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "HighText Machine Language", "Hyper Tabular Markup Language", "None of these"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["Python Script", "JQuery", "Django", "NodeJS"],
    answer: "Django"
  },
  {
    question: "Which is used for Connect To Database?",
    options: ["PHP", "HTML", "JS", "All"],
    answer: "PHP"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "String", "declare"],
    answer: "var"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "#", "/* */"],
    answer: "//"
  },
  {
    question: "How do you display text in an alert box using JavaScript?",
    options: ["msg('Hello')", "alert('Hello')", "print('Hello')", "prompt('Hello')"],
    answer: "alert('Hello')"
  },
  {
    question: "Which operator is used to assign a value?",
    options: ["=", "==", "===", "!="],
    answer: "="
  },
  {
    question: "What does 'NaN' stand for in JavaScript?",
    options: ["No assigned Name", "Not a Number", "Negative and Null", "Name as Number"],
    answer: "Not a Number"
  },
  {
    question: "Which method adds an element to the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "add()"],
    answer: "push()"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreBox = document.getElementById("score-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const current = questions[currentQuestionIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.addEventListener("click", () => selectAnswer(btn, current.answer));
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(selectedBtn, correctAnswer) {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
    }
  });

  if (selectedBtn.textContent === correctAnswer) {
    score++;
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  console.log("showScore called");
  document.getElementById("quiz-box").classList.add("hidden");
  scoreBox.classList.remove("hidden");
  console.log("Score: ", score);
  scoreEl.textContent = score + "/" + questions.length;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreBox.classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  loadQuestion();
}

window.onload = function () {
  loadQuestion();
};

