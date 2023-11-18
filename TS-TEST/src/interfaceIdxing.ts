// 인덱스 기능 타입 - 인덱스 시그니쳐 (Index Signature)

interface GetName {
    // 함수타입에 인자 msg : string 이며 
    //  이 함수는 string을 return
    // 인자의 타입과 개수는 중요 return 값도 중요하다
    // return 값은 넣어주면 좋다. void를 작성시에
    //undefined가 반환되는것으로 타입스크립트가 타입추론하기 힘들어진다?
    (msg : string) : string;
}

// 배열
interface Fruits {
    [item : number] : string;
}

const fruits : Fruits = ['Apple', 'Banna' ,'Cherry'];

interface User3 {
    [key : string] : unknown; //값 타입을 정하지않음!
    age : number;
    name : string;
}

const user3 : User3 = {
    name : ' qwer',
    age : 55,
}

user3['qwe'] = true //인덱싱 시그니쳐 unkwon 타입을 통해 지정가능
user3['email'] = ['qwer@nqwe@qwe','qw@qw'] //인덱싱 시그니쳐 unkwon 타입을 통해 지정가능


interface Payload {
    [key : string] : unknown;
}
function logValues (payload : Payload) {
    for(const key in payload) {
        console.log(payload[key]);
    }
}
interface User4 {
    [key : string] : unknown; //logValues 에서 사용할수 있게 인덱싱 시그니챠 설정
    age : number;
    name : string;
}

const user4 : User4 = {
    name : ' qwer',
    age : 55,
}
logValues(user4); //  Index signature for type 'string' is missing in type 'User4'.
// user4 에는 인덱싱 시그니쳐 타입이 없기때문에 logValues 함수에 인자로 들얼갈수없다!
// 
