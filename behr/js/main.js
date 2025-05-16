$(document).ready(function(){
    let winW = $(window).width()
    let docW = $(document).width()
    console.log(winW)
    console.log(docW)

    // $('header').addClass('fixed')
    // $('header').removeClass('fixed')

    //TOP버튼을 클릭했을때 상단으로 스크롤
    $('aside button').on('click', function(){
        //console.log('눌렀어')
        // $(window).scrollTop(100)
        $('html,body').animate({
            scrollTop : 0
        },500)
    })

    /*
        header에
        조건 1 - 스크롤 값이 0보다 크면 header에 fixed 클래스 추가
        조건 2 - 스크롤 값이 0이면 header에 fixed 클래스를 삭제
    */
    /* 로딩했을때 맨 처음에만 실행을 단 한번 */
    let scrolling
    headerFixed()//함수의 실행

    /* 스크롤 할때마다 실행 - 스크롤 안하면 실행X */
    $(window).scroll(function(){ 
        headerFixed()//함수의 실행
    })

    function headerFixed(){ //함수의 선언
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }

    //swiper 팝업
    let swiper = new Swiper(".visual .popup", {
        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        pagination: {
            el: ".visual .popup .swiper-pagination",
        },
    });

})

