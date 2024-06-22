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
  imgField.style.backgroundImage = `url(${backgroundImg[currentIndex].imgPath})`;
  currentIndex = (currentIndex + 1) % backgroundImg.length;

  // 블러 전환 효과
  blink.classList.remove("blur");
  blink.classList.add("blur");
}

// 일정 시간 간격으로 이미지 변경
setInterval(changeImage, setTime);
