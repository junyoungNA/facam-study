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
    <br> props 받는 쪽에서는 jsx태그에서 this.props.value를 통해 받을 수 있다.
<img src='./noteImg/classprops.png'/>
<img src='./noteImg/classprops2.png'/>

<h3>State란?</h3>
<ul>
    <li>컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고 있는 객체 State가 변경되면 컴퍼논트는 리랜더링 된다.</li>
</ul>

<h3>Constructor 생성자란?</h3>
<ul>
    <li>생성자를 사용하면 인스턴스화된 객체에서 다른 메서드를 호출하기전에 수행해야 하는 지정 초기화를 제공할 수 있다.</li>
    <li>클래스를 new를 붙여서 new User('john')
        인스턴스 객체로 생성하면 넘겨받은 인수와 함께 contructor가 먼저 실행된다.
        넘겨받은 인수 john은 this.name에 할당됨
    </li>
    <img src='./noteImg//stateConstructor.png'>
</ul>

<h3>super 란?</h3>
<ul>
    <li>super키워드는 자식 클래스 내에서 부모 클래스의 생성자를 호출하거나 자식 클래스 내에서 부모 클래스의 메소드를 호출할 때 사용</li>
    <li>생성자에서는 super키워드 하나만 사용하거나 this키워드가 사용되기전에 호출되어야 한다.
    super키워드를 통해 할당되기전에 this를 사용해서 부모 값을 불러오거나 메소드를 호출하게 되면 super키워드가 할당되기전에 사용한것으로 에러 발생
    </li>
    <li><h4>React에서 super에 props를 인자로 전달하는 이유는</h4> React.component객체가 생성될 때 proop 속성을 초기화 하기 위해 부모 컴포넌트에게 props를 전달 해야하며 생성자 내부에서도 this.props를 정상적으로 사용할 수 있도록 보장하기 위해 
    </li>
    <li>constructor 밖에서는 super를통해 전달받지 않아도 this.props를 전달 받을 수 있지만 constructor안에서 사용하기 위해서 super를 통해 전달받아야함!</li>
</ul>
