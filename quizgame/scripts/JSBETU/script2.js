const playBtn = document.getElementById("buttonPlay");
const menubtn = document.getElementById("btn-Menu");
const hoverSound = document.getElementById("hoverSound");
const clickSound = document.getElementById("clickSound");
const soundClickMenu = document.getElementById("clickforMenu");
const hoverMenu = document.getElementById("hoverEndgame");

const btnTopicIT = document.getElementById("btn-topic-it");
const btnTopicHistory = document.getElementById("btn-topic-history");

menubtn.addEventListener("mouseenter", () => {
  hoverMenu.currentTime = 0;
  hoverMenu.play();
});

menubtn.addEventListener("click", () => {
  soundClickMenu.currentTime = 0;
  soundClickMenu.play();
  setTimeout(() => {
    window.location.href = "../../Game/GAME-Home/index-home.html";
  }, 500);
});

//di chuyệnr sound playnow
playBtn.addEventListener("mouseenter", () => {
  hoverSound.currentTime = 0;
  hoverSound.play();
});

//click sound + chuyển trang đến game
playBtn.addEventListener("click", () => {
  clickSound.pause();
  clickSound.currentTime = 0;
  clickSound.play();
  setTimeout(() => {
    window.location.href = "../../Game/GameBETU/game2.html";
  }, 1000);
});
