// 함수 타입 - 호출 시그니쳐 (Call Signature)

interface GetName {
    // 함수타입에 인자 msg : string 이며 
    //  이 함수는 string을 return
    // 인자의 타입과 개수는 중요 return 값도 중요하다
    // return 값은 넣어주면 좋다. void를 작성시에
    //undefined가 반환되는것으로 타입스크립트가 타입추론하기 힘들어진다?
    (msg : string) : string;
}

interface User2 {
    name : string;
    age : number;
    getName : GetName;
}

const user2 : User2 = {
    name : 'qwer',
    age : 12,
    getName ( msg : string) {
        console.log(msg);
        // this 호출될때 결정됨!
        return this.name
    }
}

