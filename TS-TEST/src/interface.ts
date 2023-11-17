// interface 타입추론 : 어떠한 판단을 근거로 삼아서 다른 판단을 이끌어 냄
// 타입스크립트는 3가지 방식으로 타입을 추론할 수 있다
// 초기화된 변수
let x = 10; // x는 number로 추론됨
let message = "Hello, TypeScript!"; // message는 string으로 추론됨
// 기본값이 설정된 매개 
function greet(name = "World") {
    console.log("Hello, " + name + "!");
}

// name은 string으로 추론됨
greet(); // Hello, World!
greet("John"); // Hello, John!
// 반환 값이 있는 함수
function add(a: number, b: number): number {
    return a + b;
}

// add 함수의 반환 값은 number로 추론됨
let result = add(3, 5);


// 인터페이스 Button 정의

interface ButtonInterface {
    onInit():void;
    onClick():void;
}
//   사용자 정의 타입(Type Alias)과 유사해보입니다.
type ButtonType = {
    onInit():void;
    onClick():void;
}

//  인터페이스는 선언을 병합할 수 있다는 점입니다.

interface ButtonInterface {
onInit():void;
onClick():void;
}
// 반면 사용자 정의 타입은 선언이 중복되면 오류입니다.
// type ButtonType = {
//     onInit():void;
//     onClick():void;
//   }

//   // [오류]
//   // 'ButtonType' 식별자가 중복되었습니다.
//   type ButtonType = {
//     onToggle():void;
//   }

interface ButtonInterface {
onToggle():void;
}

// 유니온 타입 (|):
interface StringOrNumber {
    value: string | number;
}

let myValue: StringOrNumber = { value: "Hello" };
myValue = { value: 42 };
// myValue = { value: true }; // 오류: 'string' 또는 'number'만 허용됨

// 인터섹션 타입 (&):
interface Car {
    brand: string;
    speed: number;
}
interface Airplane {
    wingspan: number;
    speed: number;
}
type Vehicle = Car & Airplane;

let myVehicle: Vehicle = {
    brand: "Toyota",
    speed: 120,
    wingspan: 30
};