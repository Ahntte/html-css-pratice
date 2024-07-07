// 메뉴 항목에 그려질 언더바
let verticalUnderLine = document.getElementById("vertical-underline");
// 메뉴를 구성하는 아이템들
let verticalMenuItems = document.querySelectorAll("nav:nth-child(2) a");
let activeMenuItem = null;

verticalMenuItems.forEach((menu) =>
  menu.addEventListener("click", (e) => verticalIndicator(e))
);

function verticalIndicator(event) {
  activeMenuItem = event.currentTarget;
  updateUnderLine();
}

function updateUnderLine() {
  if (activeMenuItem) {
    // 언더바를 그릴 위치 좌표 가져오기
    verticalUnderLine.style.width = activeMenuItem.offsetWidth + "px";
    verticalUnderLine.style.left = activeMenuItem.offsetLeft + "px";
    verticalUnderLine.style.top =
      activeMenuItem.offsetTop + activeMenuItem.offsetHeight + "px";
  }
}

// 창 크기 변경 시 언더라인 위치와 크기 업데이트
window.addEventListener("resize", updateUnderLine);
window.addEventListener("DOMContentLoaded", () => {
  verticalMenuItems[0].click();
});
/* 
현재버그: 
브라우저 화면 사이즈가 달라지면 아이템 밑에 나타난 표시바가 
초기 화면 사이즈 요소의 위치에 그대로 있음

해결방안:
브라우저 화면 사이즈가 달라지면 해결해야함
따라서 실시간으로 화면 사이즈를 감지할수있는 기능을 구현함과 동시에
현재 브라우저 크기를 먼저 계산하고 
그 계산을 토대로 다시 bar요소가 나타날 위치를 계산해서
그 값을 bar에 적용함
*/
