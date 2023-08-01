const basketStarterEl = document.querySelector('header .basket-starter')
//위에 요소를 이용해 다시 querySelector로 요소를 담을 변수를 생성
const basketEl = basketStarterEl.querySelector('.basket');

basketStarterEl.addEventListener('click', (event) => {
    //window객체에도 이벤트 전파되는것을 방지
    event.stopPropagation();
    if(basketEl.classList.contains('show')) {
        //hide 숨기기
        hideBasket();
    }else {
        showBasket();
    };
})

basketEl.addEventListener('click', (event) => {
    //드롭다운 메뉴박스 안을 클릭시에도 class remove 방지
    event.stopPropagation();
})

const showBasket = () => {
    basketEl.classList.add('show');
}

const hideBasket = () => {
    basketEl.classList.remove('show');
}

window.addEventListener('click', hideBasket);
    //윈도우 클릭시 드롭다운 class remove show;

//검색
const headerEl = document.querySelector('header');
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = searchWrapEl.querySelector('.search-closer');
const searchShadowEl = searchWrapEl.querySelector('.shadow');

searchStarterEl.addEventListener('click', showSearch);
searchCloserEl.addEventListener('click', hideSearch);

searchShadowEl.addEventListener('click', hideSearch);

function showSearch() {
    headerEl.classList.add('searching');
    document.documentElement.classList.add('fixed');
}

function hideSearch() {
    headerEl.classList.remove('searching');
    document.documentElement.classList.add('fixed');

}