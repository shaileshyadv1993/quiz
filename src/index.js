document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const questionDisplay = document.getElementById("question-section");
  const optionDisplay = document.getElementById("options-display");
  const nextBtn = document.getElementById("next-btn");
  const totalScore = document.getElementById("total-score");
  const questions = [
    {
      question: "Which country has the largest population in the world?",
      options: ["India", "China", "USA", "Indonesia"],
      correct_answer: "India",
    },
    {
      question: "What is the capital city of Canada?",
      options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
      correct_answer: "Ottawa",
    },
    {
      question: "Which river is the longest in the world?",
      options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
      correct_answer: "Nile",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["South Korea", "Japan", "Thailand", "Vietnam"],
      correct_answer: "Japan",
    },
    {
      question: "Mount Everest lies on the border of which two countries?",
      options: [
        "India and China",
        "Nepal and China",
        "India and Nepal",
        "Bhutan and China",
      ],
      correct_answer: "Nepal and China",
    },
  ];
  let score = 0;
  let totalQuestions = questions.length;
  let questionNumber = 0;
  let selectedAnswer = "";
  let correctAnswer = "";

  // Start quiz
  startBtn.addEventListener("click", () => {
    // hide start button
    startBtn.classList.add("hidden");
    // Show question and next question
    score = 0;
    totalScore.classList.add("hidden");
    nextQuestion();
  });

  // Option selection
  optionDisplay.addEventListener("click", (e) => {
    selectedAnswer = e.target.innerHTML;
    e.target.classList.add("bg-blue-500");
    correctAnswer = questions[questionNumber].correct_answer;

    if (selectedAnswer === correctAnswer) {
      score = score + 1;
    }

    questionNumber = questionNumber + 1;
    nextBtn.classList.remove("hidden");
  });

  //  Next question trigger
  nextBtn.addEventListener("click", () => {
    optionDisplay.innerHTML = "";
    questionDisplay.textContent = "";
    if (questionNumber < totalQuestions) {
      nextQuestion();
    } else {
      totalScore.classList.remove("hidden");
      totalScore.innerText = `Total Score : ${score}/${totalQuestions}`;
      nextBtn.classList.add("hidden");
      startBtn.classList.remove("hidden");
      optionDisplay.removeAttribute("class", "border-b-2 border-t-2");
      questionNumber = 0;
    }
  });

  // Function for next question
  function nextQuestion() {
    //control for total questions
    questionDisplay.classList.remove("hidden");

    // Display question
    questionDisplay.textContent = questions[questionNumber].question;
    optionDisplay.setAttribute(
      "class",
      "border-b-2 border-t-2 mb-4 mt-5 w-3/4 mb-3"
    );
    let indexLenght = questions[questionNumber].options.length;
    for (let index = 0; index < indexLenght; index++) {
      const li = document.createElement("li");
      li.innerHTML = `${questions[questionNumber].options[index]}`;
      optionDisplay.appendChild(li);
      li.setAttribute(
        "class",
        "font-bold  rounded-md text-sm sm:text-xl w-full mb-1 py-2 px-5 mt-1 hover:bg-blue-500 text-center hover:cursor-pointer"
      );
    }
  }
});
