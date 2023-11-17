//Null / Undefined
// https://radlohead.gitbook.io/typescript-deep-dive/recap/null-undefined

// undefined는 명시적으로 사용하는 걸 제한해야 합니다.
// 왜냐하면 타입스크립트는 별도로 구조를 문서화할 수 있는 기회를 제공하기 때문입니다.
//잘못된예시
// function foo() {
//         // if Something
//         return { a: 1, b: 2 }
//         // else

//         return { a: 1, b: undefined }
// }
function foo(): { a: number; b?: number } {
    // if Something
    return { a: 1, b: 2 }
    // else
    return { a: 1 }
}

// 동적 형 지정 언어인 JavaScript는 선언된 변수에 어떤 값이든 재 할당이 가능합니다. 
// https://yamoo9.gitbook.io/typescript/types/any
// 반면 TypeScript는 명시적으로 데이터 유형을 설정해 사용하는 정적 형 지정 언어로 타입을 지정해 사용하는 것이 권장됩니다.
//any를 사용하면 타입스크립트를 사용하지않은 상황과 같다는 것!
// 명시적으로 any 타입 지정
let product_id:any = 124981;

// any 유형이 설정되었으므로 어떤 유형도 값으로 할당 가능
product_id = 'p9023412';


// 타입스크립트(TypeScript)에서 unknown은 모든 값의 유형을 나타내는 타입입니다. 
// any와 유사하게 모든 종류의 값을 나타내지만, any와는 다르게 unknown은 보다 안전한 타입입니다.
// unknown은 타입 안전성을 유지하면서 동시에 동적 타입의 유연성을 제공합니다. 
// 예를 들어, 다른 코드에서 어떤 값이 어떤 유형인지 확실하지 않은 경우, unknown을 사용하여 해당 값이 어떤 타입인지 명시적으로 선언할 수 있습니다.
//타입가드, typeof 타입을 확인하여 사용해야할 것 같다!
let userInput: unknown;

userInput = 5;
userInput = "Hello, TypeScript";

// 컴파일 오류: 'unknown' 타입의 값은 바로 사용할 수 없습니다.
// let message: string = userInput; 

// 'unknown' 타입의 값을 사용하기 전에 타입을 확인해야 합니다.
if (typeof userInput === 'string') {
    let message: string = userInput; // 이제 'string' 타입으로 안전하게 사용할 수 있습니다.
}


//Tuple
// 타입스크립트에서 튜플(Tuple)은 고정된 길이와 각 요소마다 고유한 타입을 가지는 배열을 나타냅니다. 
// 튜플은 배열과 유사하지만, 각 요소의 타입이 미리 정의되어 있어야 합니다. 튜플을 사용하면 특정 위치의 요소가 어떤 타입을 가져야 하는지 명확하게 지정할 수 있습니다.
let myTuple: [string, number];
myTuple = ["Hello", 42];

// 컴파일 오류: 요소의 타입이 일치하지 않음
// myTuple = [42, "Hello"]; 순서가 일치하지 않으으므로!

// Never
// never는 일반적으로 함수의 리턴 타입으로 사용되고 변수에서는 . 
// 함수의 리턴 타입으로 never가 사용될 경우, 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미합니다. 이는 무한 루프(loop)에 빠지는 것과 같습니다.
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        console.log("This is an infinite loop!");
    }
}

function fail(message: string): never {
    throw new Error(message);
}
// never는 타입 가드에서도 사용될 수 있습니다. 예를 들어, 함수가 끝나지 않는다는 사실을 타입스크립트에 알리고 싶을 때 never를 사용할 수 있습니다
function handleError(): string | never {
    try {
        // 예외가 발생하지 않으면 문자열을 반환
        return "Success";
    } catch (error) {
        // 예외가 발생하면 fail 함수를 호출하고 never를 반환
        fail("Something went wrong");
    }
}




