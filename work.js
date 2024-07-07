/* script start */
"use strict";

// for (let i = 2; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log("----------------------------------------");
// }

/* 
정의: 1보다 큰 자연수들 중에서 1과 자기자신만을 약수로 갖는 수
7이 소수임? 어떻게 판별할까
7 = 1 x 7
6 = 1 x 6 , 2 x 3 {1,2,3,6}
1과 자기자신은 무조건 약수로서 확보가되는거니 조건에서 제외
그 외 나머지 범위에서 나머지 값으로 판별가능하지않을까?
즉 1과 자신을 제외한 약수(나누어떨어지게 만드는수)가 발생하면 그 순간 소수 아님이
판정됨
*/
// let result = document.getElementById("result");
// let number = prompt("임의의 자연수 하나를 입력해주세요");
// number = parseInt(number);
// console.log(number);

// let isNumPrime = primeProc(number);
// result.innerText = `소수 여부: ${isNumPrime}`;
// console.log(isNumPrime);

// function primeProc(prime) {
//   let isPrime = true;
//   for (let i = 2; i < prime; i++) {
//     if (prime % i == 0) {
//       console.log(i);
//       isPrime = false;
//     }
//   }
//   return isPrime;
// }

/* 
동작을 가장 작은 단위로 분해하기
1부터50까지 3,6,9 결과를 출력

1. 1부터 50까지 출력
2. 카운터변수를 갖고 핸들링 시작
3. 작업의 편의를 위해 데이터를 숫자가 아닌 문자(열)로 간주하기
4. 해당 문자가 3,6,9를 갖고 있는지 검사하기
5. 3,6,9의 갯수만큼 "짝"을 출력해야하므로 갯수를 셀수있는 변수 하나 만들기 변수명은 cnt 
6. 조건을 만족하는 값은 "짝"을 출력함
7. 그렇지 않은 값은 그대로 값을 출력함
*/

//접근방식 스타일 주기적으로 함수호출
//함수 세팅할때 이 함수를 왜 만들었는지 그 말은
//어떤 기능과 역할을 맡은 함수인지 리턴 값은 뭔지 미리 다 생각하고 만들어야함
//checkCharFunc(): 타겟 문자가 있는지 없는지 검사함과 동시에
//중복된 갯수도 포함해서 '몇번' "짝"을 출력할것인지 그것을 결정짓기 위한
//count를 올리는 함수

for (let i = 1; i <= 350; i++) {
  let count = checkCharFunc(i);
  count > 0 ? console.log("짝".repeat(count)) : console.log(i);
}

function checkCharFunc(char) {
  //출력할 "짝" 문자의 갯수를 카운트 처리를 하는 함수
  let cnt = 0;
  let charValue = char.toString();
  for (let inChar of charValue) {
    inChar.includes("3") || inChar.includes("6") || inChar.includes("9")
      ? cnt++
      : undefined;
  }
  return cnt;
}

// 1부터 100까지 더하기
// 1+2+3+4+5+6+7+8+9+10
let sumResult = 0;

for (let i = 1; i < 101; i++) {
  sumResult = sumResult + i;
  console.log(sumResult);
}

for (let i = 1; i < 101; i++) {
  i % 2 == 1 ? console.log(i) : console.log("짝수");
}
