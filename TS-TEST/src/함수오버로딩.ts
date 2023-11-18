// 함수 오버로딩
// 똑같은 이름의 함수를 생성하여 매개변수의 타입을 다르게 지정하여
// 다른 값을 반환하도록 할 수 있다.
// 지정되어있는 함수의 타입과 매개변수 갯수가 맞지않다면 에러발생!


// 숫자 두 개를 더하는 함수의 오버로딩
function add(a: number, b: number): number;
// 문자열 두 개를 이어붙이는 함수의 오버로딩
function add(a: string, b: string): string;
// 배열 두 개를 병합하는 함수의 오버로딩
function add<T>(a: T[], b: T[]): T[];

// 실제 함수 구현
function add(a: number | string | number[], b: number | string | number[]): number | string | number[] {
    // 숫자 두 개를 더하는 경우
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    // 문자열 두 개를 이어붙이는 경우
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    // 배열 두 개를 병합하는 경우
    else if (Array.isArray(a) && Array.isArray(b)) {
        return a.concat(b);
    }
    // 그 외의 경우는 처리하지 않음
    else {
        throw new Error('Unsupported parameter types');
    }
}

// 함수 사용 예제
const result1 = add(5, 10); // 결과: 15
const result2 = add('Hello', ' TypeScript'); // 결과: 'Hello TypeScript'
const result3 = add([1, 2], [3, 4]); // 결과: [1, 2, 3, 4]