//타입 단언 (Assertion)
// '단언' - 주저하지 아니하고 딱 잘라 말함
//  as키워드
// ! Non-null 단언
// ! 연산자를 사용한 타입단언은 null이나 undefined를 가 아니다라는 것을 명시할때 사용

let num!:number //할당 단원 해당 값이 할당되었다고 타입스크립트에게 알려주는것
// ! 연산자없이 사용시에 num에타입에러가 에디터에서발생한다.
console.log(num);
num = 123;

//body 태그는 html에서 꼭 명시해주는 태그이므로 as 를 사용해 
// HTMLBodyElement 타입이라는 것은 단언한다.
//타입스크립트는 추론을 통해 해당 body가 element | null 로 반환된다는 추론만 가능
const el = document.querySelector('body') as HTMLBodyElement;
el!.textContent  = 'helloworld'; //! 연산자를 통해 null이 아니라는것을 명시!
// 위 코드는 잘못된 코드이다 위험한 코드!
if(el) {
    // 타입가드를 통해 el엘리먼트가있을때만 동작해야함
    el.textContent = 'helloworld';
}


// function getNumber (x : number | null | undefined) {
//     return Number((x as number).toFixed(2));
// }
//단언을 통해 getNumber에 인자가 number타입으로 단언하였다
//하지만 null 과 undefined가 들어간다면 에러가발생한다.
getNumber(null) //타입에러가 발생한다.

function getNumber (x : number | null | undefined) {
    if(x) {
        // if조건문을통해 x는 null이나 undefined가 들어갈수 없음!
        return Number((x as number).toFixed(2));
    }
}

getNumber(null) //에러발생하지않음


// function getValue(x:string| number, isNumber: boolean) {
//     // number string 타입일수도 있으므로 에러발생 
//     if(isNumber) {
//         // return Number(x.toFixed(2));
//         return Number(x!.toFixed(2)); //<=잘못된 단언이다 null값은 들어갈수있으므로
//     }
//     return x.toUpperCase();
// }

function getValue(x:string| number, isNumber: boolean) {
    // number string 타입일수도 있으므로 에러발생 
    //타입단언을 통해 에러해결
    if(isNumber) {
        return Number((x as number).toFixed(2));
    }
    return (x as string).toUpperCase();
}

getValue('hello', false);
getValue(123456789, false);