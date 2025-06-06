let score = 0;
let currentQuestion = null;
let mode = "en-to-ta"; // or "ta-to-en"

function getRandomQuestion() {
  return quizData[Math.floor(Math.random() * quizData.length)];
}

function displayQuestion() {
  currentQuestion = getRandomQuestion();

  const questionWord = mode === "en-to-ta" ? currentQuestion.word : currentQuestion.answer;
  const category = currentQuestion.category;

  document.getElementById("category").textContent = `Category: ${category}`;
  document.getElementById("question").textContent = `Translate: ${questionWord}`;
  document.getElementById("answerInput").value = "";
  document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
  const correctAnswer = mode === "en-to-ta"
    ? currentQuestion.answer.trim().toLowerCase()
    : currentQuestion.word.trim().toLowerCase();

  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById("feedback").textContent = "✅ Correct!";
  } else {
    const correctText = mode === "en-to-ta" ? currentQuestion.answer : currentQuestion.word;
    document.getElementById("feedback").textContent = `❌ Incorrect! Correct answer: ${correctText}`;
  }

  document.getElementById("score").textContent = score;
  setTimeout(displayQuestion, 2000);
}

function resetQuiz() {
  score = 0;
  document.getElementById("score").textContent = score;
  displayQuestion();
}

function toggleMode() {
  mode = mode === "en-to-ta" ? "ta-to-en" : "en-to-ta";
  document.querySelector("button[onclick='toggleMode()']").textContent =
    mode === "en-to-ta" ? "Switch to Tamil → English" : "Switch to English → Tamil";

  document.getElementById("currentMode").textContent =
    `Current Mode: ${mode === "en-to-ta" ? "English → Tamil" : "Tamil → English"}`;

  resetQuiz();
}

window.onload = displayQuestion;

