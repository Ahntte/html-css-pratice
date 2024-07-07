/* menu underline effect script */

let horizontalUnderLine = document.getElementById("underline-horizontal");
let horizontalMenu = document.querySelectorAll(".gnb ul li");

horizontalMenu.forEach((menu) =>
  menu.addEventListener("click", (e) => horizontalIndicator(e))
);

function horizontalIndicator(e) {
  horizontalUnderLine.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
  horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
  horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
}

/* slide script */
const setTime = 6000;
const imgField = document.getElementById("bgi");
const blink = document.getElementById("blink"); //필터용 요소
let currentIndex = 0;

const backgroundImg = [
  {
    className: "first-section",
    imgPath: "./assets/slideimg1.jpg",
  },
  {
    className: "first-section",
    imgPath: "./assets/slideimg2.jpg",
  },
  {
    className: "first-section",
    imgPath: "./assets/slideimg3.jpg",
  },
];

// 이미지 변경 함수
function changeImage() {
  // 블러 효과
  blink.classList.add("blur");

  // 일정 시간 후에 이미지 변경 및 블러 효과 제거
  setTimeout(() => {
    imgField.style.backgroundImage = `url(${backgroundImg[currentIndex].imgPath})`;
    blink.classList.remove("blur");
  }, 600); // 블러 효과가 지속되는 시간
}

// 일정 시간 간격으로 이미지 변경함수 호출
setInterval(() => {
  changeImage();
  currentIndex = (currentIndex + 1) % backgroundImg.length;
}, setTime);
