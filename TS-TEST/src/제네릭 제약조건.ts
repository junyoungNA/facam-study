// 제네릭
// 인터페이스 , 제약조건(constraints)

interface Mydata <T extends string | number[]> {
    // 몇몇 제약조건을 걸어 필요한 타입만 작성가능하도록 할 수 있음
    // T 제네릭에 타입은 string 또는 넘버형태의 배열만 들어올 수 있다!
    name : string,
    value : T
}

const dataA : Mydata<string> = {
    name :' qwer',
    value : 'qwer'
}


// const dataA : Mydata<number> = {
//     // 제약조건에 맞지않아 에러발생
//     name :' qwer',
//     value : 123
// }