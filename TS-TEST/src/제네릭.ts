//제네릭 (Generic)

interface Obj {
    x : number
}

type Arr = [number, number];

//toArray함수를 오버로딩
function toArray ( a: string, b : string) : string [];
function toArray ( a: number, b : number) : number [];
function toArray ( a: boolean, b : boolean) : boolean [];
function toArray ( a: Obj, b : Obj) : Obj [];
function toArray ( a: Arr, b : Arr) : string [];
function toArray ( a: any, b : any) {
    return [a,b]
};

// 계속해서 오버로딩 개념을 추가하면서 toArray를 작성하기는 힘들다
// 이럴때 사용하는 것이 제네릭 방법!

function toArrayGeneric<T> (a: T, b: T) {
    // <T> 에 작성 T 타입에 맞게 a, b 타입이 지정된다
}

// console.log(toArrayGeneric('neo', 123)) //에러 발생 두개의 타입이 같아야하므로!
// a 의 T가 string 이므로 b의 T도 string이어야하는데 123 은 number이기때문
console.log(toArrayGeneric<string>('neo', 'neo')) //이런식으로도 사용가능
// console.log(toArrayGeneric({x : 1}, {y : 2}))  // 에러
// x 키를 가지는 객체와  y키를 가지는 객체가 다르기때문에 같게지정해줘야한다?
console.log(toArrayGeneric({x : 1}, {x : 2})) 
// console.log(toArrayGeneric<Arr>([1,2], [3,4,5]))  튜플타입 위에정의된 Arr을 T타입으로 설정
// number [] 형태의 요소가 2개만 들어가야하므로 에러를 발생
console.log(toArrayGeneric<Arr>([1,2], [3,4,]));
