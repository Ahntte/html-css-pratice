/* check box script */

/* 
한 지원자가 우리 회사에 지원을 했다. 지원자가 사용 가능한 스킬은 배열에 제공이 된다
let skills = ["HTML","CSS","Javascript","React"]
Javascript와 React 둘 다 할 줄 안다면 “합격!” Javascript와 React 둘 중 하나만 할 줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오

input : let skills = ["HTML","CSS","Javascript","React"]
output: 합격 

input:let skills = ["HTML","CSS","Javascript"] 
output: 예비 

input:let skills = ["HTML","CSS"] 
output: 탈락
*/
let cardContent = document.getElementById("card-content");
console.log(cardContent);
let cardDesc = document.getElementById("card-desc");
console.log(cardDesc);
let skillButton = document.getElementById("skill-btn");
let userCheck = document.getElementsByName("skill");
let set = null;

// 유저가 체크박스를 클릭한 값을 배열에 저장

skillButton.addEventListener("click", userCheckInfo);

function userCheckInfo() {
  let yourSkills = [];
  userCheck.forEach((check) => {
    if (check.checked == true) yourSkills.push(check.value);
  });
  set = new Set(yourSkills);
  yourSkills = [...set];
  console.log(yourSkills);
  arryProc(yourSkills);
}

function arryProc(arr) {
  for (let item of arr) {
    if (arr.includes("js") && arr.includes("react")) {
      cardContent.innerText = "합격";
      cardDesc.innerText =
        "자사 면접에 최종적으로 합격 되었음을 알립니다. 진심으로 축하드립니다.";
    } else if (arr.includes("js") || arr.includes("react")) {
      cardContent.innerText = "예비";
      cardDesc.innerText =
        "자사 면접에 예비 후보입니다 좋은 결과가 있기를 기대합니다";
    } else {
      cardContent.innerText = "탈락";
      cardDesc.innerText = "아쉽지만 자사 면접에서 탈락하셨습니다.";
    }
  }
}
