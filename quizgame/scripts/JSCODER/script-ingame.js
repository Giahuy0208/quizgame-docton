const answers = document.querySelectorAll(".answer");
const hoverSound = document.getElementById("hoverSound");
const clickSound = document.getElementById("clickSound");
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
const bgMusic = document.getElementById("bgMusic");
const soundclickmenu = document.getElementById("clickforMenu");
const hoverEndgame = document.getElementById("hoverEndgame");
const openMenu = document.getElementById("openQquickMenu");
const btnCloseTUT = document.getElementById("btn-close-tut");
const popupTutorial = document.getElementById("popup-tutorial");
// Khi load trang thì show bảng Tutorial
window.addEventListener("load", function () {
  popupTutorial.classList.remove("hiddenTUT");
});
//âm thanh cho nút Đóng và hiện popup khi load trang
btnCloseTUT.addEventListener("click", function () {
  popupTutorial.classList.add("hiddenTUT"); // ẩn popup
  showQuestion();
  resetTimer();
});
btnCloseTUT.addEventListener("mouseenter", function () {
  hoverEndgame.currentTime = 0;
  hoverEndgame.play();
});
btnCloseTUT.addEventListener("click", function () {
  soundclickmenu.currentTime = 0;
  soundclickmenu.play();
});
// Âm thanh hover
answers.forEach((answer) => {
  answer.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

// Dữ liệu câu hỏi
let questions = [
  {
    question: "Thẻ HTML nào dùng để tạo một bảng?",
    answers: ["A. <ol> và <ul>", "B. <hr>", "C. <grid>", "D. <table>"],
    correct: 3,
  },
  {
    question: "Ngôn ngữ C được phát triển bởi ai?",
    answers: [
      "A. Dennis Ritchie",
      "B. Bjarne Stroustrup",
      "C. James Gosling",
      "D. Guido van Rossum",
    ],
    correct: 0,
  },
  {
    question: "Kiểu dữ liệu nào dùng để lưu số nguyên trong C?",
    answers: ["A. float", "B. char", "C. int", "D. double"],
    correct: 2,
  },
  {
    question: "Thẻ HTML nào dùng để tạo tiêu đề lớn nhất?",
    answers: ["A. <h6>", "B. <h1>", "C. <h3>", "D. <title>"],
    correct: 1,
  },
  {
    question: "Cách khai báo một biến trong C là?",
    answers: [
      "A. var x = 10;",
      "B. int x = 10;",
      "C. declare x = 10;",
      "D. let x = 10;",
    ],
    correct: 1,
  },
  {
    question: "Thẻ HTML nào dùng để tạo danh sách không có thứ tự?",
    answers: ["A. <ul>", "B. <ol>", "C. <li>", "D. <dl>"],
    correct: 0,
  },
  {
    question: "Cách khai báo một mảng trong C?",
    answers: [
      "A. int arr(5);",
      "B. array arr = {1,2,3};",
      "C. int arr[5];",
      "D. list arr = (1,2,3);",
    ],
    correct: 2,
  },
  {
    question: "Thẻ nào để chèn hình ảnh vào HTML?",
    answers: ["A. <pic>", "B. <image>", "C. <img>", "D. <src>"],
    correct: 2,
  },
  {
    question: "Cách tạo vòng lặp `for` trong C?",
    answers: [
      "A. for(i = 0; i < 10; i++)",
      "B. loop(i < 10) { ... }",
      "C. foreach(i in range(10))",
      "D. repeat(i until 10)",
    ],
    correct: 0,
  },
  {
    question: "Thẻ HTML nào để nhập văn bản?",
    answers: [
      "A. <textbox>",
      "B. <input type='text'>",
      "C. <enter>",
      "D. <write>",
    ],
    correct: 1,
  },
  {
    question: "Lệnh `printf` trong C có tác dụng gì?",
    answers: [
      "A. Nhập dữ liệu",
      "B. Xuất dữ liệu ra màn hình",
      "C. Chạy chương trình",
      "D. Tạo vòng lặp",
    ],
    correct: 1,
  },
  {
    question: "Cách khai báo một biến số thực trong C?",
    answers: [
      "A. int num = 3.14;",
      "B. float num = 3.14;",
      "C. double num = '3.14';",
      "D. char num = 3.14;",
    ],
    correct: 1,
  },
  {
    question: "HTML là viết tắt của gì?",
    answers: [
      "A. HyperText Markup Language",
      "B. Hyperlink Text Model Language",
      "C. High-level Text Management Language",
      "D. Hyper Transfer Metadata Language",
    ],
    correct: 0,
  },
  {
    question: "Cách gọi hàm trong C?",
    answers: [
      "A. function myFunc();",
      "B. call myFunc();",
      "C. myFunc();",
      "D. invoke myFunc();",
    ],
    correct: 2,
  },
  {
    question: "Thẻ nào để liên kết một file CSS vào HTML?",
    answers: ["A. <style>", "B. <script>", "C. <link>", "D. <css>"],
    correct: 2,
  },
  {
    question: "Lệnh `scanf` trong C dùng để?",
    answers: [
      "A. Xuất dữ liệu ra màn hình",
      "B. Nhập dữ liệu từ bàn phím",
      "C. Tạo vòng lặp",
      "D. Chạy chương trình",
    ],
    correct: 1,
  },
  {
    question: "Thẻ HTML nào dùng để tạo liên kết?",
    answers: ["A. <link>", "B. <href>", "C. <a>", "D. <connect>"],
    correct: 2,
  },
  {
    question: "Để khai báo một hằng số trong C, dùng?",
    answers: [
      "A. #define PI 3.14",
      "B. const int PI = 3.14;",
      "C. set PI = 3.14;",
      "D. fixed PI = 3.14;",
    ],
    correct: 0,
  },
  {
    question: "Thẻ HTML nào dùng để tạo dòng kẻ ngang?",
    answers: ["A. <br>", "B. <hr>", "C. <line>", "D. <border>"],
    correct: 1,
  },
  {
    question: "Cách khai báo điều kiện `if` trong C?",
    answers: [
      "A. if x > 10 then",
      "B. if (x > 10) { ... }",
      "C. when x > 10 do",
      "D. check(x > 10) { ... }",
    ],
    correct: 1,
  },
];

let currentQuestion = 0;
let score = 0;
let lives = 3;
let timerInterval;
let bestScore1  = localStorage.getItem("bestScore1") || 0;
let musicMuted = localStorage.getItem("musicMuted") === "true";

// Gán trạng thái nhạc lúc load script
bgMusic.muted = musicMuted;

function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.querySelector(".question-number").textContent = `Câu hỏi ${
    currentQuestion + 1
  }:`;
  document.querySelector(".question-text p").textContent = q.question;

  const answersEls = document.querySelectorAll(".box-answers .answer");
  answersEls.forEach((el, index) => {
    el.textContent = q.answers[index];
    el.style.backgroundColor = "";
    el.style.pointerEvents = "auto";
    el.onclick = () => checkAnswer(index);
  });

}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 20;
  document.getElementById("time").textContent = timeLeft;
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      wrongSound.currentTime = 0;
      wrongSound.play();
      checkAnswer(-1);
    }
  }, 1000);
}

function checkAnswer(selectedIndex) {
  clearInterval(timerInterval);
  const q = questions[currentQuestion];
  const answersEls = document.querySelectorAll(".box-answers .answer");

  answersEls.forEach((el) => (el.style.pointerEvents = "none"));

  const isCorrect = selectedIndex === q.correct;

  if (isCorrect) {
    score++;
    correctSound.currentTime = 0;
    correctSound.play();
  } else {
    if (selectedIndex !== -1) {
      wrongSound.currentTime = 0;
      wrongSound.play();
    }
    lives--;
    updateLives();
    document.querySelector(".title").classList.add("shake");
    setTimeout(() => {
      document.querySelector(".title").classList.remove("shake");
    }, 500);
  }

  answersEls.forEach((el, i) => {
    if (i === q.correct) {
      el.style.backgroundColor = "rgba(0, 255, 8, 0.65)";
    } else if (i === selectedIndex && selectedIndex !== -1) {
      el.style.backgroundColor = "rgba(255, 0, 0, 0.65)";
    }
  });

  updateScore();

  setTimeout(() => {
    currentQuestion++;
    if (lives <= 0 || currentQuestion >= questions.length) {
      endGame();
    } else {
      showQuestion();
      resetTimer();
    }
  }, 1000);
}

function updateScore() {
  document.getElementById("score").textContent = score;
  document.querySelector(".best-score span").textContent = bestScore1;
}

function updateLives() {
  const heartContainer = document.querySelector(".hearts-container");
  heartContainer.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.opacity = i < lives ? "1" : "0.3";
    heartContainer.appendChild(heart);
  }
}

function endGame() {
  if (score > bestScore1) {
    bestScore1 = score;
    localStorage.setItem("bestScore1", bestScore1);
  }
  // Ẩn menu góc phải (nếu menu có class là 'right-menu')
const iconmenu  = document.querySelector(".icon-menu");
if (iconmenu) {
  iconmenu.style.display = "none";
}
//ẩnẩn
document.getElementById("retryQuizMenu").style.display = "none";

  document.querySelector(".question-number").style.display = "none";
  document.querySelector(
    ".question-text p"
  ).textContent = `Hoàn thành quiz! Bạn đúng ${score}/${questions.length} câu.`;
  document.querySelector(".box-answers").style.display = "none";
  document.querySelector(".timer").style.display = "none";
  document.querySelector(".score").style.display = "none";
  document.querySelector(".hearts-container").style.display = "none";
  document.querySelector(".best-score").style.display = "none";

  document.querySelector(".button-back").style.display = "block";
}

function restartGame() {
  score = 0;
  lives = 3;
  currentQuestion = 0;
  //hiện lại menu khi nhấn playagain
  const iconmenu = document.querySelector(".icon-menu");
  if (iconmenu) {
    iconmenu.style.display = "block";
  }
  // Hiển thị lại nút "Try Again"
  document.getElementById("retryQuizMenu").style.display = "block";
  document.querySelector(".question-number").style.display = "inline-block";
  document.querySelector(".box-answers").style.display = "block";
  document.querySelector(".timer").style.display = "inline-block";
  document.querySelector(".score").style.display = "inline-block";
  document.querySelector(".hearts-container").style.display = "flex";
  document.querySelector(".best-score").style.display = "inline-block";
  document.querySelector(".button-back").style.display = "none";

  updateScore();
  updateLives();
  shuffleQuestions();
  showQuestion();
}

// Sự kiện DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const openSupportBtn = document.getElementById("openSupport");
  const supportMenu = document.getElementById("supportMenu");
  const toggleMusicBtn = document.getElementById("toggleMusic");
  const retryQuizBtn = document.getElementById("retryQuizMenu");
  const goHomeBtn = document.getElementById("goHomeMenu");
  const closeMenuBtn = document.getElementById("closeMenu");
 

  document.getElementById("openQuickMenu").addEventListener("click", () => {
    supportMenu.classList.remove("hidden");
  });

  // Cập nhật trạng thái nút nhạc
  toggleMusicBtn.textContent = musicMuted ? "Music Off" : "Music On";

  shuffleQuestions();
  updateScore();
  updateLives();
  //sound di chuột cho popup
  document.getElementById("toggleMusic").addEventListener("mouseenter", () => {
    hoverEndgame.currentTime = 0;
    hoverEndgame.play();
  });

  document
    .getElementById("retryQuizMenu")
    .addEventListener("mouseenter", () => {
      hoverEndgame.currentTime = 0;
      hoverEndgame.play();
    });

  document.getElementById("goHomeMenu").addEventListener("mouseenter", () => {
    hoverEndgame.currentTime = 0;
    hoverEndgame.play();
  });

  document.getElementById("goHomeMenu").addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
    setTimeout(() => {
      window.location.href = "../../Game/gameCODER/index.html";
    }, 1000);
  });

  

  document.getElementById("closeMenu").addEventListener("mouseenter", () => {
    hoverEndgame.currentTime = 0;
    hoverEndgame.play();
  });

  //sound hover cho play again
  document.getElementById("playAgain").addEventListener("mouseenter", () => {
    hoverEndgame.currentTime = 0;
    hoverEndgame.play();
  });

  //sound hover cho Home
  document.getElementById("gotoPlayNow").addEventListener("mouseenter", () => {
    hoverEndgame.currentTime = 0;
    hoverEndgame.play();
  });

  //sound hover cho Setting
  document.getElementById("openSupport").addEventListener("mouseenter", () => {
    hoverEndgame.currentTime = 0;
    hoverEndgame.play();
  });

  document
    .getElementById("openQuickMenu")
    .addEventListener("mouseenter", () => {
      hoverEndgame.currentTime = 0;
      hoverEndgame.play();
    });
  //sound click cho icon menu
  document.getElementById("openQuickMenu").addEventListener("click", () => {
    soundclickmenu.currentTime = 0;
    soundclickmenu.play();
  });

  //sound click cho nút về Home
  document.getElementById("gotoPlayNow").addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
    setTimeout(() => {
      window.location.href = "../../Game/gameCODER/index.html";
    }, 1000);
  });

  document.getElementById("playAgain").addEventListener("click", () => {
    restartGame();
    resetTimer();
  });

  openSupportBtn.addEventListener("click", () => {
    soundclickmenu.currentTime = 0;
    soundclickmenu.play();
    supportMenu.classList.remove("hidden");

  });

  //ẨN menu popup
  closeMenuBtn.addEventListener("click", () => {
    soundclickmenu.currentTime = 0;
    soundclickmenu.play();
    supportMenu.classList.add("hidden");
  });

  toggleMusicBtn.addEventListener("click", () => {
    musicMuted = !musicMuted;
    bgMusic.muted = musicMuted;
    toggleMusicBtn.textContent = musicMuted ? "Music Off" : "Music On";
    localStorage.setItem("musicMuted", musicMuted);
  });

  retryQuizBtn.addEventListener("click", () => {
    soundclickmenu.currentTime = 0;
    soundclickmenu.play();
    setTimeout(() => {
      location.reload();
    }, 500);
  });

 
});
