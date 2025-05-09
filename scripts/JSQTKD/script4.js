const playBtn = document.getElementById("buttonPlay");
const menubtn = document.getElementById("btn-Menu");
const hoverSound = document.getElementById("hoverSound");
const clickSound = document.getElementById("clickSound");
const soundClickMenu = document.getElementById("clickforMenu");
const hoverMenu = document.getElementById("hoverEndgame");

menubtn.addEventListener("mouseenter", () => {
  hoverMenu.currentTime = 0;
  hoverMenu.play();
});

menubtn.addEventListener("click", () => {
  soundClickMenu.currentTime = 0;
  soundClickMenu.play();
  setTimeout(() => {
    window.location.href = "../../index.html";
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
    window.location.href = "../../Game/GameQTKD/game4.html";
  }, 1000);
});

