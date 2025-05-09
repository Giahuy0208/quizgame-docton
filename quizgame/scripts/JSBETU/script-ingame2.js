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
    question: "Trường BETU được thành lập vào năm nào?",
    answers: ["A. 1997", "B. 1999", "C. 2001", "D. 2003"],
    correct: 1,
  },
  {
    question: "Trường BETU có trụ sở chính tại đâu?",
    answers: [
      "A. Thành phố Thủ Dầu Một",
      "B. Thành phố Dĩ An",
      "C. Huyện Bến Cát",
      "D. Huyện Tân Uyên",
    ],
    correct: 0,
  },
  {
    question: "Tên đầy đủ của trường BETU là gì?",
    answers: [
      "A. Đại học Bách khoa Bình Dương",
      "B. Đại học Kỹ thuật Bình Dương",
      "C. Đại học Kinh tế - Kỹ thuật Bình Dương",
      "D. Đại học Kinh doanh và Công nghệ Bình Dương",
    ],
    correct: 2,
  },
  {
    question: "Trường BETU thuộc loại hình đào tạo nào?",
    answers: ["A. Công lập", "B. Tư thục", "C. Bán công", "D. Quốc tế"],
    correct: 1,
  },
  {
    question:
      "Ngành nào sau đây KHÔNG thuộc nhóm ngành đào tạo chính của BETU?",
    answers: [
      "A. Kinh tế",
      "B. Du lịch",
      "C. Y khoa",
      "D. Công nghệ thông tin",
    ],
    correct: 2,
  },
  {
    question:
      "BETU hiện nay có khoảng bao nhiêu ngành đào tạo bậc đại học (ước lượng)?",
    answers: ["A. 10 ngành", "B. 15 ngành", "C. 20 ngành", "D. Trên 25 ngành"],
    correct: 3,
  },
  {
    question: "Mục tiêu đào tạo của BETU là gì?",
    answers: [
      "A. Đào tạo chuyên gia nghiên cứu cấp cao",
      "B. Đào tạo nguồn nhân lực chất lượng cao gắn với thực tiễn",
      "C. Đào tạo cán bộ nhà nước",
      "D. Chỉ tập trung vào lĩnh vực kỹ thuật",
    ],
    correct: 1,
  },
  {
    question:
      "Trường BETU thường xuyên tổ chức hoạt động nào để sinh viên phát triển kỹ năng mềm?",
    answers: [
      "A. Hội chợ sách",
      "B. Các chương trình ngoại khóa, câu lạc bộ sinh viên",
      "C. Các kỳ thi quốc gia",
      "D. Các lớp học giáo lý",
    ],
    correct: 1,
  },
  {
    question: "BETU có chương trình liên kết đào tạo quốc tế với nước nào?",
    answers: ["A. Nhật Bản", "B. Anh", "C. Hàn Quốc", "D. Cả 3 nước trên"],
    correct: 3,
  },
  {
    question: "Khẩu hiệu của trường BETU là gì?",
    answers: [
      'A. "Kiến thức là sức mạnh"',
      'B. "Học để biết, học để làm"',
      'C. "Thành công bắt đầu từ đây"',
      'D. "Học đi đôi với hành, lý thuyết gắn với thực tiễn"',
    ],
    correct: 3,
  },
];

let currentQuestion = 0;
let score = 0;
let lives = 3;
let timerInterval;
let bestScore = localStorage.getItem("bestScore") || 0;
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
  resetTimer();
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
    }
  }, 1000);
}

function updateScore() {
  document.getElementById("score").textContent = score;
  document.querySelector(".best-score span").textContent = bestScore;
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
  if (score > bestScore) {
    bestScore = score;
    localStorage.setItem("bestScore", bestScore);
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
      window.location.href = "../../Game/GameBETU/index2.html";
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
      window.location.href = "../../Game/gameBETU/index2.html";
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

  resetBestScoreBtn.addEventListener("click", () => {
    soundclickmenu.currentTime = 0;
    soundclickmenu.play();
    bestScore = 0;
    localStorage.setItem("bestScore", bestScore);
    updateScore();
  });
});
