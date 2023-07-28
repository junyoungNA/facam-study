<h2>CSS </h2></br>
  <a href='https://developer.mozilla.org/ko/docs/Web/CSS/word-break'>work-break </a> :단어단위로 줄바꿈 설정 <br>
<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/align-items'>align-itmes </a> : 기본값은 nomal이지만 flex 속성 상태의 박스안에서는 기본값이
stretch 속성이 된다. <br> (교차축에서 최대한 늘어나려는 성질) absolute상태에서 stretch가 되지만 늘어나려는 성질은 갖지않는다.
<br>
<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent'>text-indent</a>
 : 내어쓰기,들여쓰기 빈공간을 만들어 글의 시작지점을 조정
background-image를 통해 검색엔진을 위해 대체 텍스트를 사용했을때 -9999px 속성을 적용해서 텍스트가 안보이게 할 수 있음
<br><br>

<h2>Javascirpt </h2>
<h4>이벤트버블링</h4>
  <ul>
    <li>이벤트 버블링 현상은 상속관계에 있는 html태그들 중 이벤트가 발생했을때 상속관계에 있는 요소들까지 이벤트가 전달되는 현상</li>
    <li>addEventListener시 발생되는 콜백함수에는 암묵적으로 event객체가 인자로 전달된다.</li>
    <li>전달 받은 event객체로 event.stopPropagation() 메소드를 활용해 이벤트 버블링을 막을수있음</li>
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
