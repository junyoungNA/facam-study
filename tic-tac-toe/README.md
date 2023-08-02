<h3>SPA란?</h3>
<ul>
    <li>웹 사이트의 전체 페이지를 하나의 페이지에 담아 동적으로 화면을 바꿔가면 표현하는것
    Single Page Application</li>
    <li>SPA에서 페이지 전환(브라우징)은 HTML5의 History API를 사용해서 가능하게 만듭니다.
    자바스크립트 영역에서 History API를 이용해서 현재 페이지 내에서 화면 이동이 일어난 것처럼 동작하게 해준다. (React-router-dom이 History API사용)</li>
</ul>

<h3>JSX란</h3>
<ul>
<li>JSX는 자바스크립트의 확장 문법으로 리액트에서는 JSX를 이용해서 화면 UI가 보이는 모습을 나타냄</li>
<li>babel을 통해서 리액트 내부적으로 JSX문법을 createElement로 변환시켜서 해석해준다</li>
</ul>

<h3>Props란?</h3>
<ul>
<li>Properties의 줄임말로 Props는 상속하는 부모 컴포넌트로부터 자녀 컴포넌트에 데이터등을 전달하는 방법</li>
<li>Props는 읽기 전용(immutable)로 자녀 컴포넌트 입장에서는 변하지 않는다.</li>
</ul>
<h5>클래스 컴포넌트에서 props받기</h5>
renderSquare라는 함수를 만들어서 value라는 props 지정 후 jsx 태그에서 this.renderSquare(props)를 지정해서 props전달
    <br> props 받는 쪽에서는 jsx태그에서 this.props.value를 통해 받을 수 있다
<img src='./noteImg/classprops.png'/>
<img src='./noteImg/classprops2.png'/>
