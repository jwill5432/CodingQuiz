  const startButton = document.querySelector('#startquizbutton');
  const quizContainer = document.querySelector('#quiz-container');
  const question = document.querySelector('#question');
  const answers = document.querySelectorAll('.answer-button');
  const highScoresList = document.querySelector('#highScoresList');
  const backbutton = document.querySelector('#backbutton');
  const topscores = document.querySelector('#topscores')
  const timerDisplay = document.querySelector("#timer");
  const scoreread = document.querySelector(`#scoreread`);
  const youwin = document.querySelector(`#youwin`);
  var enteredinitials = document.getElementById(`#initials`);
  let score = 0;
  let initials = "";
  var scores = [];
  let timerInterval;
  initialform.style.display= `none`;

  const quizData = [
    {
      question: 'What does HTML stand for?',
      answers: ['Hyper Tool Making Language', 'Hyper Text Markup Language', 'Hyper Time Money Language', 'Heroic Tool Marketing Language'],
      correctAnswer: 1
    },
    {
      question: 'What does CSS stand for?',
      answers: ['Cascading Style Sequence', 'Cascading Style Sheets', 'Computer Science Style', 'Conputer Styling Sequence'],
      correctAnswer: 1
    },
    {
      question: 'What does boolean represent?',
      answers: ['If, Then', '0-9', 'A loop', 'True/False'],
      correctAnswer: 3
    },
  ];

  function displayQuestion() {
    question.textContent = quizData[currentQuestionIndex].question;
    answers.forEach((answerButton, index) => {
      answerButton.textContent = quizData[currentQuestionIndex].answers[index];
    });
  }

  function checkAnswer(event) {
    const selectedAnswer = event.target;
    const isCorrect = selectedAnswer.textContent === quizData[currentQuestionIndex].answers[quizData[currentQuestionIndex].correctAnswer];
    if (!isCorrect) {
      timeRemaining -= 10; 
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === quizData.length) {
      youwin.textContent = "Quiz complete! Your score is: " + timeRemaining + " seconds";
      endQuiz();
      timeRemaining = ""
    } else {
      displayQuestion();
    }
  }

  startButton.addEventListener('click', () => {
    starttimer()});
    timerDisplay.style.display = 'block';

    function timerdown (){
      timeRemaining--;
      timerDisplay.textContent = timeRemaining;
      if (timeRemaining === 0) {
        alert('Time is up! Your score is: 0 seconds');
        endQuiz();
      }
    };

  function starttimer(){
    currentQuestionIndex= 0
    timeRemaining = 51
    startButton.style.display = 'none';
    topscores.style.display = 'none';
    quizContainer.style.display = 'block';
    displayQuestion();
    answers.forEach(answerButton => {
      answerButton.addEventListener('click', checkAnswer);
    });
    setInterval(timerdown, 1000);
  };

  function endQuiz() {
   initialform.style.display= `block`;
   clearInterval(timerdown);
   quizContainer.style.display = 'none';
   timerDisplay.style.display = 'none';
   saveScore();
  }

  backbutton.addEventListener('click', () => {
    startButton.style.display = 'block';
    topscores.style.display = 'block';
    backbutton.style.display = 'none';
  });
  
  function addScore() {
    initials = document.getElementById("initials");
    score = timeRemaining;
    var list = document.getElementById("highScoresList");
    var newItem = document.createElement("li");
    newItem.innerHTML = initials + ": " + score;
    list.appendChild(newItem);
  };
  
  function showTopScores() {
    highScoresList.style.display = "block";
    startButton.style.display = 'none';
    topscores.style.display = 'none';
    backbutton.style.display = 'block'
  };
  