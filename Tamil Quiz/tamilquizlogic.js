let score = 0;
let currentQuestion = null;

function getRandomQuestion() {
  return quizData[Math.floor(Math.random() * quizData.length)];
}

function displayQuestion() {
  currentQuestion = getRandomQuestion();
  document.getElementById("question-category").textContent = `Category: ${currentQuestion.category}`;
  document.getElementById("question-word").textContent = `Translate: ${currentQuestion.word}`;
  document.getElementById("answer-input").value = "";
  document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer-input").value.trim().toLowerCase();
  const correctAnswer = currentQuestion.answer.trim().toLowerCase();

  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById("feedback").textContent = "✅ Correct!";
  } else {
    document.getElementById("feedback").textContent = `❌ Incorrect! Correct answer: ${currentQuestion.answer}`;
  }

  document.getElementById("score").textContent = score;
  setTimeout(displayQuestion, 2000); // Show new question after 2 seconds
}

function resetQuiz() {
  score = 0;
  document.getElementById("score").textContent = score;
  displayQuestion();
}

window.onload = displayQuestion;


