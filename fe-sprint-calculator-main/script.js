const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  let num1 = parseFloat(n1);
  let num2 = parseFloat(n2);

  if(operator==="+"){
    result = num1+num2;
  }else if(operator==="-"){
    result = num1-num2;
  }else if(operator==="*"){
    result = num1*num2;
  }else if(operator==="/"){
    result = num1/num2;
  }
  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      if(firstOperend.textContent === "0"){
        firstOperend.textContent = buttonContent;
        console.log('숫자 ' + buttonContent + ' 버튼');
      }else{
        secondOperend.textContent = buttonContent;
        console.log('숫자 ' + buttonContent + ' 버튼');
      }
    }
    if (action === 'operator') {
      operator.textContent = buttonContent;
      console.log('연산자 ' + buttonContent + ' 버튼');
    }

    if (action === 'decimal') {
      console.log('소수점 버튼');
    }

    if (action === 'clear') {
      console.log('초기화 버튼');
      firstOperend.textContent = "0";
      secondOperend.textContent = "0";
      operator.textContent = "+";
      calculatedResult.textContent = "0"
    }

    operatorAction = operator.textContent;
    let firstNumber = parseFloat(firstOperend.textContent);
    let secondNumber = parseFloat(secondOperend.textContent);
    //calcResult="";
    //calcResult = calculatedResult.textContent;
    if (action === 'calculate') {
      if(operatorAction==="+"){
        calculatedResult.textContent=firstNumber+secondNumber;
      }else if(operatorAction==="-"){
        calculatedResult.textContent=firstNumber-secondNumber;
      }else if(operatorAction==="*"){
        calculatedResult.textContent=firstNumber*secondNumber;
      }else if(operatorAction==="/"){
        calculatedResult.textContent=firstNumber/secondNumber;
      }
    }
  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.
const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum = "";
let previousKey = "";
let previousNum = "";
let operatorForAdvanced = "";
let displayResult = "";

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      if(display.textContent === "0" && operatorForAdvanced === ""){
        console.log('숫자 ' + buttonContent + ' 버튼');
        display.textContent = buttonContent;
        firstNum = String(display.textContent);
      }else if(display.textContent !== "0" && operatorForAdvanced === ""){
        console.log('숫자 ' + buttonContent + ' 버튼');
        display.textContent = display.textContent+buttonContent;
        firstNum = String(display.textContent);
      }else if(operatorForAdvanced !== ""){
        if(previousKey === "operator"){
          console.log('숫자 ' + buttonContent + ' 버튼');
          display.textContent = buttonContent;
          previousKey = display.textContent;
          previousNum = display.textContent;
        }else if(previousKey !== "operator"){
          console.log('숫자 ' + buttonContent + ' 버튼');
          display.textContent = display.textContent+buttonContent;
          previousNum = display.textContent;}}
    }

    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
      operatorForAdvanced = buttonContent;
      previousKey = "operator";
    }

    if (action === 'decimal') {
      //만약 디스플레이가 0이거나, 프리비어스키가 오퍼레이터일때-> "0."해서 display에 보인다.
      //만약 디스플레이에 소수점이 포함되있지 않다면 -> 디스플레이에 있는 숫자 옆에 "."해서 display에 보인다.
      //만약 다 아니고 디스플레이에 소수점이 포함된다면 -> 다른 작동은 하지 않고 이미 소수점이 있으므로 프리비어스키는 데미컬로 준다.
      if(display.textContent ==="0" || previousKey ==="operator"){
        console.log('소수점 ' + buttonContent + ' 버튼');
        display.textContent = "0."
      }else if(!(display.textContent.includes('.'))) {
        display.textContent = display.textContent + '.';
      }
      previousKey = "demical";
    }
    //100.1252 + 12 + 15 - 23 - 1442 / 23 / 12 * 23 = ?

    if (action === 'clear') {
      firstNum = "";// 1. 계산기에 입력되었던 첫 번째 값
      operatorForAdvanced = "";// 2. 연산자
      previousNum = ""; // 3. 계산기에 입력되었던 두 번째 값
      display.textContent = "0";// 4. 화면
      console.log('초기화 버튼');
      previousKey = "";
    }  

    if (action === 'calculate' && previousKey !== "calculate") {
      console.log('처음 enter 계산 버튼'); 
      console.log("두번째값고정 : ",previousNum);
      console.log(firstNum, operatorForAdvanced, display.textContent);
      display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
      previousKey = "calculate";
      console.log("=", display.textContent);
    }else if(previousKey === "calculate" && action === 'calculate'){
        console.log('두번째 enter 계산 버튼');
        display.textContent = calculate(display.textContent, operatorForAdvanced, previousNum);
        console.log("두번째값고정 : ",previousNum);
        console.log("= : ",display.textContent);
      }   
    
    //그러니까 enter를 친다음 3-3 = 0 거기서 enter치면 3-0이 아니라 3-3-3이 되야함
    //결과값 0에서 또 -3하면 0-3=-3 -> 결과값 -3에서 또 -3 = -3-3=-6 되게 만들기
    //엔터를 처음 눌렀을 때는 첫번째 숫자,연산기호,최근까지적었던 숫자로 해주면 됨
    //두번째 엔터를 눌렀을 때는 첫번째 엔터쳤을 때 결과값에서 연산기호, 처음입력한 두번째숫자로 해줘야함
    //현재 display값에서 연산기호, 두번째 숫자를 눌린 당시의 값을 변수로 지정, 그 변수만 불러오면 됨
    
    //만약 2+3=5 다음 +4 => 5+4가 되야 하는데, 2+4가 됨
    //지금 사칙연산이 1번만 됨 무조건 enter를 누르고 다음꺼를 진행 해야하는데,
    //그냥 바로 1+2+3 = 6나오게 해야함, 현재는 1+2+3 = 1+3 = 4
  }});