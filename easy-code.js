// 문자열을 입력 받아 역순으로 출력
function charReversePrint(str) {
  let cnt = "";
  let strArry = [...str];
  strArry.reverse();
  for (let charItem of strArry) {
    cnt += charItem;
  }
  return cnt;
}
console.log(charReversePrint("안녕하세요 저는 태현입니다"));

// 내장함수를 사용해서 한줄로 끝내버림

function charReversePrintFunc(str) {
  return str.split(" ").reverse().join(" ");
  //split()메서드는 문자열을 배열로 만들어줌
  //구분자를 지정하면 그 구분자를 기준으로 문자열이 쪼개져서 배열의 아이템으로 들어감
  //여기서 말하는 구분자는 빈문자(""), 공백문자(" "), 그 외 콤마(,) 마침표(.) 등등
}
console.log(charReversePrintFunc("토토야 형이 많이 사랑해"));

//findSmallestElement()함수를 구현하시오
let numberArray = [3000, 64, 187, 2354, 99, 57, 8, 1180];

function findSmallestElement(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == null ? 0 : arr[0];
}

console.log(findSmallestElement(numberArray));

/* 
돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 
최소 개수를 계산해주는 함수를 만드시오
*/

function needsMoneyCntFunc(coin) {
  let cnt = 0;
  let finalCoin = coin;
  if (finalCoin >= 50000) {
    cnt = parseInt(finalCoin / 50000);
    console.log("50000원권 필요 매수" + cnt);
    //50000을 필요수만큼 원금에서 차감 후 갱신된 금액대에서 나머지 조건들 검사
    finalCoin = finalCoin - 50000 * cnt;
  } else {
    cnt = 0;
    console.log("50000원권 필요 매수:" + cnt);
  }
  if (finalCoin >= 10000) {
    cnt = parseInt(finalCoin / 10000);
    console.log("10000원권 필요 매수:" + cnt);
    finalCoin = finalCoin - 10000 * cnt;
  } else {
    cnt = 0;
    console.log("10000원권 필요 매수:" + cnt);
  }
  if (finalCoin >= 5000) {
    cnt = parseInt(finalCoin / 5000);
    console.log("5000원권 필요 매수:" + cnt);
    finalCoin = finalCoin - 5000 * cnt;
  } else {
    cnt = 0;
    console.log("5000원권 필요 매수:" + cnt);
  }
  if (finalCoin >= 1000) {
    cnt = parseInt(finalCoin / 1000);
    console.log("1000원권 필요 매수:" + cnt);
    finalCoin = finalCoin - 1000 * cnt;
  } else {
    cnt = 0;
    console.log("1000원권 필요 매수" + cnt);
  }
  if (finalCoin >= 500) {
    cnt = parseInt(finalCoin / 500);
    console.log("500원 필요 갯수:" + cnt);
    finalCoin = finalCoin - 500 * cnt;
  } else {
    cnt = 0;
    console.log("500원 필요 갯수:" + cnt);
  }
  if (finalCoin >= 100) {
    cnt = parseInt(finalCoin / 100);
    console.log("100원 필요 갯수:" + cnt);
    finalCoin = finalCoin - 100 * cnt;
  } else {
    cnt = 0;
    console.log("100원 필요 갯수:" + cnt);
  }
}

console.log(needsMoneyCntFunc(43200));

//
function greet(name) {
  //   console.log(`안녕 내 이름은 ${name}이야`);
  return name;
}
console.log(greet("레일리"));
console.log(greet("할리"));
console.log(greet("앤젤리나"));

function meetAt(year, month, date) {
  if (year != null && month != null && date != null) {
    return `${year}년 ${month}월 ${date}일`;
  }
  if (month == null && date == null) {
    return `${year}년`;
  }
  if (year > 0 && month > 0) {
    return `${year}년 ${month}월`;
  }
}

console.log(meetAt(2024));
console.log(meetAt(2024, 7));
console.log(meetAt(2024, 7, 3));

/* 
조건문의 조건을 짤때 순서 중요함 
작성팁: 상대적으로 까다롭고 제한적이고 특수한 상황일때 성립되는 조건이라면 가장 먼저 체크하고 
그렇지 않은 조건들을 마지막에 배치하는게 좋다 
일반적이고 성립되기 쉬운 조건들은 마지막으로 빼는게 좋다
숫자로 비유하자면 내림차순으로 조건 작성할것
*/
