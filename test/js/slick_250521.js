
$(document).ready(function(){
    $('.visual .popup .popup_wrap').slick({
        autoplay: true, //팝업 자동 실행
        autoplaySpeed: 5000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        //fade: true,  //페이드 효과 적용
        dots: true, //하단 페이지 버튼 (true, false)
        arrows: true,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        //infinite: false, //무한반복
    });

    // $('.클래스명').slick('slickPause');  /* 일시정지 기능 */
    // $('.클래스명').slick('slickPlay');  /* 재생 기능 */
    $('.visual .btn_wrap .ctrl_stop').on('click', function(){
        console.log('일시정지 버튼 -일시정지 버트 숨김/재생버트 나옴')
        $('.visual .popup .popup_wrap').slick('slickPause');  /* 일시정지 기능 */
        $(this).hide()//숨김
        $('.visual .btn_wrap .ctrl_play').show()//나타남
    })
    $('.visual .btn_wrap .ctrl_play').on('click', function(){
        console.log('재생 버튼- 재생버튼 숨김/ 일시정지 버트 나옴')
        $('.visual .popup .popup_wrap').slick('slickPlay');  /* 재생 기능 */
        $(this).hide()//숨김
        $('.visual .btn_wrap .ctrl_stop').show()//나타남
    })




    $('.biz .list .list_wrap').slick({
        autoplay: false, //팝업 자동 실행
        autoplaySpeed: 3000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        dots: false, //하단 페이지 버튼 (true, false)
        arrows: false,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        infinite: false, //무한반복
        //variableWidth: true, //넓이를 자유롭게 설정
        slidesToShow: 4, //한번에 보일 팝업 수(pc기준)
        //slidesToScroll: 1, //한번 드래그에 움직이는 슬라이드 제한
        swipeToSlide: true, //드래그한만큼 슬라이드 움직이기
        //centerMode: true, //가운데정렬(가운데가 1번)
        responsive: [
            {
              breakpoint: 1024, //1024px 이하
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 375,
              settings: {
                slidesToShow: 1
              }
            },
            
        ]
    });



    $('.news .list .list_wrap').slick({
        autoplay: false, //팝업 자동 실행
        autoplaySpeed: 3000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        dots: false, //하단 페이지 버튼 (true, false)
        arrows: false,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        infinite: false, //무한반복
        variableWidth: true, //넓이를 자유롭게 설정
        slidesToShow: 3, //한번에 보일 팝업 수
        //slidesToScroll: 1, //한번 드래그에 움직이는 슬라이드 제한
        swipeToSlide: true, //드래그한만큼 슬라이드 움직이기
        //centerMode: true, //가운데정렬(가운데가 1번)
        responsive: [
            {
              breakpoint: 1300, //1300px 이하
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
              },
            
        ]
    });






})