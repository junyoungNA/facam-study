//타입가드(Guard)

function logText (el:Element) {
    console.log(el.textContent)
}

const h1El = document.querySelector('h1');
h1El!.textContent  = 'helloworld'; //! 연산자를 통해 null이 아니라는것을 명시!
// 위 코드는 잘못된 코드이다 위험한 코드!
if(h1El instanceof HTMLHeadingElement) {
    // 만약 document.querySelector('h1'); 부분에서 null값이 들어간다면
    // 해당조건문에서 걸러져서 실행되기때문에 에러발생하지않음
    // 타입가드를 통해 el엘리먼트가있을때만 동작해야함
    logText(h1El);
}