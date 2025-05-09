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
    question: "Quản trị kinh doanh là gì?",
    answers: [
      "A. Nghề bán hàng",
      "B. Quản lý và điều hành hoạt động kinh doanh",
      "C. Phát triển phần mềm",
      "D. Sản xuất sản phẩm",
    ],
    correct: 1,
  },
  {
    question: "Một trong 4 chức năng chính của quản trị là gì?",
    answers: ["A. Phân tích", "B. Lập kế hoạch", "C. Tiếp thị", "D. Sản xuất"],
    correct: 1,
  },
  {
    question: "Kỹ năng cần thiết cho nhà quản trị cấp cao là?",
    answers: [
      "A. Kỹ thuật",
      "B. Kỹ năng giao tiếp",
      "C. Tầm nhìn chiến lược",
      "D. Bán hàng",
    ],
    correct: 2,
  },
  {
    question: "Môi trường kinh doanh KHÔNG bao gồm yếu tố nào sau đây?",
    answers: ["A. Chính trị", "B. Công nghệ", "C. Giải trí", "D. Kinh tế"],
    correct: 2,
  },
  {
    question: "Tầm nhìn (vision) doanh nghiệp là gì?",
    answers: [
      "A. Kế hoạch năm nay",
      "B. Hình ảnh mong muốn trong tương lai",
      "C. Quy trình sản xuất",
      "D. Chiến dịch quảng cáo",
    ],
    correct: 1,
  },
  {
    question: "Mục tiêu kinh doanh phải đảm bảo yếu tố nào?",
    answers: [
      "A. Dài dòng",
      "B. Không đo lường được",
      "C. Cụ thể",
      "D. Khó hiểu",
    ],
    correct: 2,
  },
  {
    question: "Vai trò của lãnh đạo trong doanh nghiệp là gì?",
    answers: [
      "A. Lập kế hoạch cá nhân",
      "B. Chỉ đạo và thúc đẩy nhân viên",
      "C. Tự hoàn thành công việc",
      "D. Giải quyết hồ sơ pháp lý",
    ],
    correct: 1,
  },
  {
    question: "Marketing nhằm mục đích gì?",
    answers: [
      "A. Quản lý tài chính",
      "B. Thỏa mãn nhu cầu khách hàng",
      "C. Sản xuất hàng hóa",
      "D. Quản lý nhân viên",
    ],
    correct: 1,
  },
  {
    question: "Quản trị nhân sự liên quan đến gì?",
    answers: [
      "A. Bảo trì máy móc",
      "B. Tuyển dụng, đào tạo và giữ chân nhân viên",
      "C. Phân phối sản phẩm",
      "D. Đổi mới sản phẩm",
    ],
    correct: 1,
  },
  {
    question: "Chuỗi cung ứng là gì?",
    answers: [
      "A. Quy trình marketing",
      "B. Hệ thống vận chuyển sản phẩm từ nhà sản xuất đến khách hàng",
      "C. Hệ thống quản lý nhân sự",
      "D. Quy trình quảng cáo",
    ],
    correct: 1,
  },
  {
    question: "Khách hàng mục tiêu là ai?",
    answers: [
      "A. Bất kỳ ai đi ngang qua",
      "B. Người có khả năng và nhu cầu mua sản phẩm",
      "C. Chủ doanh nghiệp",
      "D. Đối thủ cạnh tranh",
    ],
    correct: 1,
  },
  {
    question: "Startup có đặc điểm nổi bật nào?",
    answers: [
      "A. Quy mô lớn ngay từ đầu",
      "B. Mô hình sáng tạo và rủi ro cao",
      "C. Có sẵn thị trường lớn",
      "D. Thu nhập ổn định",
    ],
    correct: 1,
  },
  {
    question: "Tại sao doanh nghiệp cần xây dựng thương hiệu?",
    answers: [
      "A. Giảm chi phí sản xuất",
      "B. Tăng nhận diện và lòng tin từ khách hàng",
      "C. Giảm thuế",
      "D. Làm đẹp website",
    ],
    correct: 1,
  },
  {
    question: "Lợi nhuận được tính bằng công thức nào?",
    answers: [
      "A. Doanh thu - Chi phí",
      "B. Chi phí + Doanh thu",
      "C. Doanh thu x 2",
      "D. Chi phí - Doanh thu",
    ],
    correct: 0,
  },
  {
    question: "Một rủi ro phổ biến trong kinh doanh là gì?",
    answers: [
      "A. Giá vốn ổn định",
      "B. Biến động thị trường",
      "C. Nhu cầu tiêu dùng tăng cao",
      "D. Lợi nhuận tăng mạnh",
    ],
    correct: 1,
  },
  {
    question: "Quyết định kinh doanh nên dựa trên yếu tố nào?",
    answers: [
      "A. Cảm tính",
      "B. Dữ liệu và phân tích",
      "C. May mắn",
      "D. Ngẫu nhiên",
    ],
    correct: 1,
  },
  {
    question: "Cloud computing là gì?",
    answers: [
      "A. Tính toán dưới nước",
      "B. Lưu trữ và xử lý dữ liệu trên internet",
      "C. Xây dựng hệ thống mạng LAN",
      "D. Thiết kế phần cứng",
    ],
    correct: 1,
  },
  {
    question: "Ưu điểm lớn nhất của Cloud computing là gì?",
    answers: [
      "A. Chi phí cao",
      "B. Tính linh hoạt và mở rộng dễ dàng",
      "C. Phải bảo trì nhiều",
      "D. Cần nhiều phần cứng riêng",
    ],
    correct: 1,
  },
  {
    question: "Một ví dụ phổ biến của dịch vụ Cloud là?",
    answers: [
      "A. Google Drive",
      "B. Microsoft Word",
      "C. Excel Offline",
      "D. Paint",
    ],
    correct: 0,
  },
  {
    question: "Mô hình dịch vụ Cloud phổ biến gồm những loại nào?",
    answers: [
      "A. IaaS, PaaS, SaaS",
      "B. LAN, MAN, WAN",
      "C. HTTP, FTP, SMTP",
      "D. SQL, NoSQL, MongoDB",
    ],
    correct: 0,
  },
];

let currentQuestion = 0;
let score = 0;
let lives = 3;
let timerInterval;
let bestScore3 = localStorage.getItem("bestScore3") || 0;
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
  document.querySelector(".best-score span").textContent = bestScore3;
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
  if (score > bestScore3) {
    bestScore3 = score;
    localStorage.setItem("bestScore3", bestScore3);
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
      window.location.href = "../../Game/GameQTKD/index4.html";
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
      window.location.href = "../../Game/GameQTKD/index4.html";
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
