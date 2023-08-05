<h3>Axios란?</h3>
<ul>
    <li>Axios 는 브라우저 Node.js를 위한 Promise API를 활용한 HTTP 비동기 통신 라이브러리 이다.</li>
    <li>npm install axios --save.</li>
    <li><a href='https://yamoo9.github.io/axios/guide/api.html#http-%EB%A9%94%EC%84%9C%EB%93%9C-%EB%B3%84%EC%B9%AD'>axios 인스턴스</a></li>
    <li>계속해서 사용되는 api 주소를 작성하게되면 코드의 가독서이 떨어지므로 axios를 사용하기전 api주소나, 여러 설정들을 할 수 있다.</li>
    <img src='./noteImg/axiosInstance.png'/>
</ul>
<h3><a href='https://styled-components.com/'>Styled-components</a></h3>
    <ul>
    <li>리액트 프로그램에서 css를 어떻게 더 잘 처리할지에 대한 생각으로 만들어진 프로그램</li>
    <li>props 전달해서 동적으로 css를 설정할 수있고, 생성시(styled 태그이름) 을 통해 직접 css 를 컴포넌트화 해서 커스터마이징 할 수 있다. </li>
    <img src='./noteImg/styledComponents.png'/>
</ul>

<h3>useEffect의  클리너 함수 <h3>
    <ul>
        <li>clean-up 함수는 useEffect 내의 함수가 여러번 실행될 때, 다음 useEffect 가 실행되기 전에 실행되는 함수이다.</li> 
        <li>컴포넌트가 언마운트(컴포넌트가 페이지에서 사라지는 시점) 되거나 업데이트 되기 직전에 어떤 작업을 수행하고 싶다면, clean-up 함수를 반환해주어야 한다.</li> 
        <li>선언될 당시의 과거의 변수 값을 참조하고 있던 이펙트가 클린업(정리)되고, 새로운 변수 값을 다시 참조하게 되는 것.</li> 
        <li>clean-up 함수는 보다 효율적으로 useEffect가 작동할 수 있도록 제어하여 메모리 관리를 하기 위함이다</li> 
    </ul>
