<h2>CSS </h2></br>
  <a href='https://developer.mozilla.org/ko/docs/Web/CSS/word-break'>work-break </a> :단어단위로 줄바꿈 설정 <br>
<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/align-items'>align-itmes </a> : 기본값은 nomal이지만 flex 속성 상태의 박스안에서는 기본값이
stretch 속성이 된다. <br> (교차축에서 최대한 늘어나려는 성질) absolute상태에서 stretch가 되지만 늘어나려는 성질은 갖지않는다.
<br>
<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent'>text-indent</a>
 : 내어쓰기,들여쓰기 빈공간을 만들어 글의 시작지점을 조정
background-image를 통해 검색엔진을 위해 대체 텍스트를 사용했을때 -9999px 속성을 적용해서 텍스트가 안보이게 할 수 있음
<br>
<a href='https://webclub.tistory.com/541' >음수마진Negative margins</a> : 음수 마진은 문서 내의 정상적인 흐름(document flow) 를 건들이지 않는다고 함. 요소를 이동하기 위해 음수 마진을 사용하면, 그 뒤에 오는 모든 요소들도 같이 이동하게 된다.음수로 마진을 주면 요소를 부모 밖으로 튀어나오게 하거나(부모와 자신의 간격 조정) 형제 요소의 위치를 변경(ex)자기 바로 아래에 있는 형제 요소를 음수 margin-bottom으로 자기 쪽으로 끌어옴할 수 있다.
<br>

<h2>Javascirpt </h2>
<h4>이벤트버블링</h4>
  <ul>
    <li>이벤트 버블링 현상은 상속관계에 있는 html태그들 중 이벤트가 발생했을때 상속관계에 있는 요소들까지 이벤트가 전달되는 현상</li>
    <li>addEventListener시 발생되는 콜백함수에는 암묵적으로 event객체가 인자로 전달된다.</li>
    <li>전달 받은 event객체로 event.stopPropagation() 메소드를 활용해 이벤트 버블링을 막을수있음</li>
  </ul>
  <h4><a href='https://ko.javascript.info/script-async-defer'>defer/async</a> </h4>
   <ul>
   <li>script태그의 defer 속성은 페이지가 모두 로드된 후에 해당 외부 스크립트가 실행됨을 명시함</li>
    <li>script 태그의 async 속성은 스크립트가 나머지 페이지와는 비동기적으로 실행됨을 나타내며, 브라우저가 페이지를 파싱하는 동안에도 스크립트가 사용가능해지면 곧바로 실행됨을 명시함.

</li>
   </ul>

<h2>트러블 슈팅</h2> 
<h4>backgroud이미지 url사용시 notfound </h4>

<img src='./troubleIMG/folderPath.png' alt='폴더 경로이미지' width='500px' height='220px'/> 
<img src='./troubleIMG/imgNotfound.png' alt='notfound이미지' width='500px'/><br>
<strong>해결방안</strong> <br>
1. 캐시, 검색기록 삭제 (해결 x) <br>
2. css파일 연결 link 태그 src경로에 ?after를 추가(./css//main.css?after)(해결x) <br>
url 경로를 잘보니 imges폴더를 css폴더 안에서 찾고있는것을 발견했다.<br> 경로가 왜 저렇게 인식되는지는 모르겠지만 ../하나더 추가해서 해결 <br>
<img src='./troubleIMG//urlResolve.png' alt='url 해결'/>
