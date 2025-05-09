// Lấy các phần tử
const rankingBtn = document.getElementById("rankingBtn");
const chooseThemeBtn = document.getElementById("chooseThemeBtn");
const rankingModal = document.getElementById("rankingModal");
const themeModal = document.getElementById("themeModal");
const overlay = document.getElementById("overlay");
const closeRanking = document.getElementById("closeRanking");
const closeTheme = document.getElementById("closeTheme");
const hoverMenu = document.getElementById("hoverMenu");
const resetRankingBtn = document.getElementById("resetRankingBtn");
const theme1 = document.getElementById("theme1");
const theme2 = document.getElementById("theme2");
const theme3 = document.getElementById("theme3");
const theme4 = document.getElementById("theme4");
//khai baso am thanh
const hoverSound = document.getElementById("hoverMenu");
const clickSound = document.getElementById("button-sound");
//gan am thanh cho cac nut

// Mở cửa sổ Chọn chủ đề
chooseThemeBtn.addEventListener("click", () => {
  clickSound.current = 0;
  clickSound.play();
  themeModal.style.display = "flex";
  overlay.style.display = "block";
});
// Đóng cửa sổ Chọn chủ đề
closeTheme.addEventListener("click", () => {
  clickSound.current = 0;
  clickSound.play();
  themeModal.style.display = "none";
  overlay.style.display = "none";
});

// Khi nhấn chọn chủ đề 1
theme1.addEventListener("click", () => {
  clickSound.current = 0;
  clickSound.play();
  setTimeout(() => {
    window.location.href = "../../Game/GameCODER/index.html"; // thay bằng trang game của bạn
  }, 500);
});

// Khi nhấn chọn chủ đề 2
theme2.addEventListener("click", () => {
  clickSound.current = 0;
  clickSound.play();
  setTimeout(() => {
    window.location.href = "../../Game/GameBETU/index2.html";
  }, 500);
});

// Khi nhấn chọn chủ đề 3
theme3.addEventListener("click", () => {
  clickSound.current = 0;
  clickSound.play();
  setTimeout(() => {
    window.location.href = "../../Game/GameLUAT/index3.html";
  }, 500);
});

// Khi nhấn chọn chủ đề 4
theme4.addEventListener("click", () => {
  clickSound.current = 0;
  clickSound.play();
  setTimeout(() => {
    window.location.href = "../../Game/GameQTKD/index4.html";
  }, 500);
});

// Mở cửa sổ xep hang
rankingBtn.addEventListener("click", () => {
  clickSound.current = 0;
  clickSound.play();
  rankingModal.style.display = "flex";
  overlay.style.display = "block";
});
// Đóng cửa sổ xep hang
closeRanking.addEventListener("click", () => {
  clickSound.current = 0;
  clickSound.play();
  rankingModal.style.display = "none";
  overlay.style.display = "none";
});

//xép hạng
rankingBtn.addEventListener("click", () => {
  clickSound.current = 0;
  clickSound.play();
  rankingModal.style.display = "flex";
  overlay.style.display = "block";
});

closeRanking.addEventListener("click", () => {
  clickSound.current = 0;
  clickSound.play();
  rankingModal.style.display = "none";
  overlay.style.display = "none";
});

// Mở cửa sổ Chọn chủ đề
chooseThemeBtn.addEventListener("mouseenter", () => {
  hoverMenu.current = 0;
  hoverMenu.play();
});
// Đóng cửa sổ Chọn chủ đề
closeTheme.addEventListener("mouseenter", () => {
  hoverMenu.current = 0;
  hoverMenu.play();
});

// Khi di chọn chủ đề 1
theme1.addEventListener("mouseenter", () => {
  hoverMenu.current = 0;
  hoverMenu.play();
});

// Khi di chọn chủ đề 2
theme2.addEventListener("mouseenter", () => {
  hoverMenu.current = 0;
  hoverMenu.play();
});

// Khi di chọn chủ đề 3
theme3.addEventListener("mouseenter", () => {
  hoverMenu.current = 0;
  hoverMenu.play();
});
// Khi di chọn chủ đề 4
theme4.addEventListener("mouseenter", () => {
  hoverMenu.current = 0;
  hoverMenu.play();
});

// Mở cửa sổ xep hang
rankingBtn.addEventListener("mouseenter", () => {
  hoverMenu.current = 0;
  hoverMenu.play();
});
// Đóng cửa sổ xep hang
closeRanking.addEventListener("mouseenter", () => {
  hoverMenu.current = 0;
  hoverMenu.play();
});

//xép hạng
rankingBtn.addEventListener("mouseenter", () => {
  hoverMenu.current = 0;
  hoverMenu.play();
});

closeRanking.addEventListener("mouseenter", () => {
  hoverMenu.current = 0;
  hoverMenu.play();
});

// Khi nhấn chọn reset
resetRankingBtn.addEventListener("click", () => {
  clickSound.current = 0;
  clickSound.play();
});
resetRankingBtn.addEventListener("mouseenter", () => {
  hoverMenu.current = 0;
  hoverMenu.play();
});
// Các phần tử
const rankingList = document.getElementById("rankingList");
const rankingList2 = document.getElementById("rankingList2");
const rankingList3 = document.getElementById("rankingList3");
const rankingList1 = document.getElementById("rankingList1");

// Cập nhật điểm cao nhất trong bảng xếp hạng khi trang được tải
document.addEventListener("DOMContentLoaded", () => {
  // Lấy điểm cao nhất từ localStorage
  const highestScore = localStorage.getItem("bestScore") || 0;
  const highestScore1 = localStorage.getItem("bestScore1") || 0;
  const highestScore2 = localStorage.getItem("bestScore2") || 0;
  const highestScore3 = localStorage.getItem("bestScore3") || 0;

  // Hiển thị điểm cao nhất lên bảng xếp hạng
  document.getElementById(
    "rankingList"
  ).textContent = `Điểm cao nhất BETU : ${highestScore} điểm`;
  document.getElementById(
    "rankingList1"
  ).textContent = `Điểm cao nhất CODER  : ${highestScore1} điểm`;
  document.getElementById(
    "rankingList2"
  ).textContent = `Điểm cao nhất LUẬT : ${highestScore2} điểm`;
  document.getElementById(
    "rankingList3"
  ).textContent = `Điểm cao nhất QTKD  : ${highestScore3} điểm`;
});

// Xử lý sự kiện khi nhấn nút reset
resetRankingBtn.addEventListener("click", () => {
  // Reset điểm cao nhất trong localStorage
  localStorage.setItem("bestScore", 0);
  localStorage.setItem("bestScore1", 0);
  localStorage.setItem("bestScore2", 0);
  localStorage.setItem("bestScore3", 0);

  // Cập nhật lại bảng xếp hạng
  rankingList.textContent = "  Điểm cao nhất BETU : 0 điểm";
  rankingList1.textContent = "Điểm cao nhất CODER : 0 điểm";
  rankingList2.textContent = " Điểm cao nhất LUẬT : 0 điểm";
  rankingList3.textContent = " Điểm cao nhất QTKD : 0 điểm";
});
