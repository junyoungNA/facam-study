//인터페이스 확장

interface UserA {
    age : number;
    name : string;
}

interface UserB extends UserA{
    isValid : boolean;
}

const qwer : UserA = {
    // a는 isValid 사용불가
    name : 'qwer',
    age : 12,
    // isValid: true,
}

const asdf : UserA = {
    // b는 상속으로  name, age사용가능
    name : 'qwer',
    age : 12
}