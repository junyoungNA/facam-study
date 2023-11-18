//함수 -명시적 this

interface Cat {
    name : string,
    age : number;
}

const cat : Cat = {
    name : 'Lucy',
    age : 3
}

// 자바스크립트에서 this는 함수의 호출위치에서 정의된다
//타입스크립트에서는 
function hello (this : Cat,  msg : string) {
    // console.log 안에 this 는 cat 변수에 name : 'lucy'를 가리키고있다.
    // cat이라는 객체데이터가 연결되어서 그렇다?
    // this는 암시적으로 any가 자동으로 포함된다
    //이것을 해결하기위해 인자에 this : Cat 을 추가해준다
    console.log (`hello ${this.name}, ${msg}`);
}
hello.call(cat, 'goodbye');