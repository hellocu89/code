$(document).ready(function(){
/****************************header : 시작***************************** 
 * PC인지 모바일인지 구분
 * 스크롤값 계산
 * 공통사항 : 브라우저가 스크롤되거나 header에 오버하면 header에 fixed클래스 추가
 * PC일때 : 마우스를 오버한 li에만 over클래스 추가
 * 모바일일때 :  메뉴열기를 클릭하면 header에 menu_open 클래스 추가
 *              1차메뉴를 클릭하면 (하위메뉴가 있는 1차메뉴만) 클릭한 li에 open 클랙스 추가
*/

let device_status  // pc인지 모바일인지
let scrolling // 스크롤한 값
let window_w // 브라우저 넓이
let mobile_size = 1024 // 모바일로 전환되는 사이즈

scroll_chk() //함수실행 (처음에 문서가 로딩되었을때 1번)
resize_chk() //함수실행
$(window).resize(function(){ // 브라우저가 리사이즈될때마다 1번씩 실행
    resize_chk()
})
$(window).scroll(function(){ // 브라우저를 스크롤 할때마다 1번씩 실행
    scroll_chk() //함수실행
})

function scroll_chk(){ //함수선언
    //console.log('스크롤!!!!!!')
    scrolling = $(window).scrollTop()
    console.log(scrolling)
    if(scrolling > 0){
        $('header').addClass('fixed')
    }else{
        $('header').removeClass('fixed')
    }
}


function resize_chk(){ //함수선언
    window_w = $(window).width()

    if(window_w > mobile_size){
        device_status = 'PC'
    }else{
        device_status = 'mobile'
    }
    //console.log(device_status)
}

$('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li:last-child').on('focusout', function(){
    $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
})

/*******  header에 마우스 오버했을때 ***************/

$('header').on('mouseenter focusin', function(){
    //console.log('오버!!!!!!!')
    if(device_status == 'PC'){
        $('header').addClass('fixed')
    }
    
})

$('header').on('mouseleave', function(){
    //console.log('아웃!!!!!!!')
    if(scrolling <= 0){
        $('header').removeClass('fixed')
    }//if종료
    
})
$('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin' , function(){
    if(device_status == 'PC'){
        $(this).addClass('over')
    }
})
$('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
    if(device_status == 'PC'){
        $(this).removeClass('over')
    }
})

$('header .gnb .gnb_open').on('click', function(){
    $('header').addClass('menu_open')
})

$('header .gnb .gnb_close').on('click', function(){
    $('header').removeClass('menu_open')
})

/*
    닫힌메뉴를 클릭하면 열리고, 열린메뉴를 클릭하면 닫힘
    동시에 여러개의 메뉴가 열려있을수도 있음
    토글클래스- 클래스가 없으면 추가하고, 있으면 삭제
*/
$('header .gnb .gnb_wrap ul.depth1 > li:has(ul.depth2) > a ').on('click', function(e){
    if(device_status == 'mobile'){
        e.preventDefault()
    console.log('클릭했당!!!!!!!')
    $(this).parents('li').toggleClass('open')
    }   
}
)

/****************************header : 종료***************************** */


/****************************visual swiper : 시작***************************** */


    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        //effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_wrap button.btn_prev',  
        },

    });
    //visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    //visual_swiper.autoplay.start();  /* 재생 기능 */


    $('.visual .btn_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop() /* 일시정지 기능 */
        $(this).hide()/* 나 자신은 숨기고 */
        $('.visual .btn_wrap button.btn_play').show() /* 재생버튼 나오게 */

    })
    $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start()/* 재생 기능 */
        $(this).hide()
        $('.visual .btn_wrap button.btn_stop').show()
    })


/****************************visual swiper : 종료***************************** */



/****************************find tap기능 : 시작***************************** 
1. 클릭한 li에서 data-content 값을 가져와서 tab_tiem 중에 해당같이 id인 요소를 찾아서 나타나게 해야함
 * (다른요소는 숨김)
 2.클릭한 ㅁli에만 active클래스 줌
 3. 클릭한 li안에 있는 span에 선택됨이라고 글자 써줌(다른 li에 있는 건 삭제)
 4. 클릭한 li속성 aria-selected값을 true로 변경 ( 다른 li는 모든 false)
*/

let find_content // 선택된 메뉴(iD) 이름

$('.find .list .tab_list ul li').on('click', function(){
   
   if($(this).hasClass('active') == false){
    find_content = $(this).attr('data-content')
    //console.log(find_content)

    $('.find .list .tab_content .tab_item').removeClass('active')
    $('.find .list .tab_content').find('#'+find_content).addClass('active')



    $('.find .list .tab_list ul li').removeClass('active')
    $(this).addClass('active')

    $('.find .list .tab_list ul li button span').text('')
    $(this).find('span').text('선택됨')


    $('.find .list .tab_list ul li').attr('aria-selected', 'false')
    $(this).attr('aria-selected', 'true')
   }
})


/****************************find tap기능 : 종료***************************** */



})
    