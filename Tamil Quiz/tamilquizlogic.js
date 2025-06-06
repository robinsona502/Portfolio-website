let score = 0;
let currentIndex = 0;

function loadQuestion() {
  const question = quizData[currentIndex];
  document.getElementById('question-category').innerText = `Category: ${question.category}`;
  document.getElementById('question-word').innerText = question.word;
  document.getElementById('answer-input').value = '';
  document.getElementById('feedback').innerText = '';
}

function checkAnswer() {
  const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
  const correctAnswer = quizData[currentIndex].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    document.getElementById('feedback').innerText = '✅ Correct!';
    score++;
  } else {
    document.getElementById('feedback').innerText = `❌ Incorrect. Answer: ${quizData[currentIndex].answer}`;
  }

  document.getElementById('score').innerText = score;
  currentIndex = (currentIndex + 1) % quizData.length;
  setTimeout(loadQuestion, 1500);
}

function resetQuiz() {
  score = 0;
  currentIndex = 0;
  document.getElementById('score').innerText = score;
  loadQuestion();
}

window.onload = loadQuestion;

