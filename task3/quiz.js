const questions = [
  { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Rome"],
    answer: "Paris",
  },
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  document.getElementById("options").innerHTML = q.options
    .map(
      (option) =>
        `<button onclick="checkAnswer('${option}')">${option}</button>`
    )
    .join("");
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    document.getElementById("quiz").innerHTML = `<h2>Your score: ${score}</h2>`;
  }
}

displayQuestion();
