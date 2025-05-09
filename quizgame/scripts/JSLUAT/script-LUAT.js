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
    question: "Pháp luật là gì?",
    answers: [
      "A. Quy định tự do cá nhân",
      "B. Hệ thống quy tắc xử sự chung do Nhà nước ban hành",
      "C. Thỏa thuận giữa cá nhân",
      "D. Phong tục tập quán",
    ],
    correct: 1,
  },
  {
    question: "Ai có quyền ban hành luật ở Việt Nam?",
    answers: [
      "A. Chính phủ",
      "B. Quốc hội",
      "C. Bộ trưởng",
      "D. Chủ tịch tỉnh",
    ],
    correct: 1,
  },
  {
    question: "Hiến pháp Việt Nam hiện hành được ban hành năm nào?",
    answers: ["A. 1946", "B. 1980", "C. 1992", "D. 2013"],
    correct: 3,
  },
  {
    question:
      "Luật giao thông đường bộ quy định độ tuổi tối thiểu lái xe máy là?",
    answers: ["A. 16 tuổi", "B. 18 tuổi", "C. 20 tuổi", "D. 21 tuổi"],
    correct: 0,
  },
  {
    question: "Vi phạm pháp luật là hành vi như thế nào?",
    answers: [
      "A. Được phép làm",
      "B. Bị pháp luật cấm",
      "C. Được pháp luật khuyến khích",
      "D. Không liên quan pháp luật",
    ],
    correct: 1,
  },
  {
    question:
      "Luật Hôn nhân và Gia đình Việt Nam quy định tuổi kết hôn tối thiểu của nam là?",
    answers: ["A. 16 tuổi", "B. 17 tuổi", "C. 18 tuổi", "D. 20 tuổi"],
    correct: 3,
  },
  {
    question: "Trong hoạt động tố tụng, người bào chữa thường là ai?",
    answers: ["A. Bị cáo", "B. Cảnh sát", "C. Luật sư", "D. Công tố viên"],
    correct: 2,
  },
  {
    question: "Chế độ chính trị của Việt Nam được quy định trong văn bản nào?",
    answers: [
      "A. Luật Dân sự",
      "B. Hiến pháp",
      "C. Bộ luật Hình sự",
      "D. Luật Lao động",
    ],
    correct: 1,
  },
  {
    question: "Người chưa đủ 18 tuổi vi phạm pháp luật gọi là?",
    answers: [
      "A. Người trưởng thành",
      "B. Người vị thành niên",
      "C. Người đủ tuổi",
      "D. Người lao động",
    ],
    correct: 1,
  },
  {
    question:
      "Bộ luật Lao động Việt Nam điều chỉnh mối quan hệ giữa ai với ai?",
    answers: [
      "A. Người sử dụng lao động và người lao động",
      "B. Người dân và cảnh sát",
      "C. Người bán và người mua",
      "D. Người học và thầy cô",
    ],
    correct: 0,
  },
  {
    question: "Thời gian thử việc tối đa theo Luật Lao động là bao lâu?",
    answers: ["A. 1 tháng", "B. 2 tháng", "C. 3 tháng", "D. 6 tháng"],
    correct: 1,
  },
  {
    question: "Theo luật, ai có quyền khởi kiện ra tòa án?",
    answers: [
      "A. Bất kỳ ai",
      "B. Chỉ cơ quan nhà nước",
      "C. Người bị thiệt hại",
      "D. Công an",
    ],
    correct: 2,
  },
  {
    question: "Bộ luật Hình sự Việt Nam quy định về gì?",
    answers: [
      "A. Quyền sở hữu",
      "B. Các hành vi tội phạm và hình phạt",
      "C. Hợp đồng dân sự",
      "D. Quy định hành chính",
    ],
    correct: 1,
  },
  {
    question: "Hợp đồng lao động phải có hình thức gì?",
    answers: ["A. Miệng", "B. Tin nhắn", "C. Văn bản", "D. Qua trung gian"],
    correct: 2,
  },
  {
    question: "Luật Bảo vệ môi trường yêu cầu doanh nghiệp phải?",
    answers: [
      "A. Tăng sản lượng",
      "B. Giảm chi phí",
      "C. Bảo vệ và không gây ô nhiễm",
      "D. Tăng giá bán",
    ],
    correct: 2,
  },
  {
    question: "Ai chịu trách nhiệm thi hành án sau bản án có hiệu lực?",
    answers: [
      "A. Tòa án",
      "B. Cảnh sát",
      "C. Công chứng viên",
      "D. Chấp hành viên",
    ],
    correct: 3,
  },
  {
    question: "Luật Cạnh tranh nhằm mục đích gì?",
    answers: [
      "A. Độc quyền thị trường",
      "B. Ngăn chặn hành vi cạnh tranh không lành mạnh",
      "C. Tăng thuế",
      "D. Khuyến khích gian lận",
    ],
    correct: 1,
  },
  {
    question: "Theo pháp luật, ai có quyền sở hữu tài sản?",
    answers: [
      "A. Chỉ Nhà nước",
      "B. Chỉ doanh nghiệp",
      "C. Mọi cá nhân, tổ chức hợp pháp",
      "D. Người nước ngoài",
    ],
    correct: 2,
  },
  {
    question: "Thời hiệu khởi kiện vụ án dân sự thông thường là bao lâu?",
    answers: ["A. 6 tháng", "B. 1 năm", "C. 2 năm", "D. 3 năm"],
    correct: 3,
  },
  {
    question: "Luật Bảo hiểm xã hội quy định việc đóng bảo hiểm bắt buộc cho?",
    answers: [
      "A. Người lao động",
      "B. Sinh viên",
      "C. Người tự do",
      "D. Người thất nghiệp",
    ],
    correct: 0,
  },
];

let currentQuestion = 0;
let score = 0;
let lives = 3;
let timerInterval;
let bestScore1 = localStorage.getItem("bestScore1") || 0;
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
  const iconmenu = document.querySelector(".icon-menu");
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
      window.location.href = "../../Game/GameLUAT/index3.html";
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
      window.location.href = "../../Game/GameLUAT/index3.html";
    }, 1000);
  });

  document.getElementById("playAgain").addEventListener("click", restartGame);

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
