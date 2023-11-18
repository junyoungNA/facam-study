// 인터페이스와 타이별칭 (typeAlias 차이보기)
// 기능적차이는 거의없다?
//하지만 interface를 권장 상속이나 확장때문?
// 타입 에일리어스는 유니온 타입, 인터섹션 타입이 필요하거나 간단하고 독립적인 타입 정의를 만들 때 사용합니다.
// 인터페이스는 클래스에 대한 계약을 정의하거나 선언 병합이 필요하며 extends 및 implements 키워드를 사용해야 할 때 사용합니다.

type TypeUser = {
    name : string;
    age : number;
    isValid : boolean;
}

interface InterfaceUser {
    // interface Type과 다르게 = 을 사용하지않음
    name : string,
    age : number,
    isValid : boolean,
}

// const qwer : ?? = {

// }