$(document).ready(function(){
    //console.log('나와라')

    // 탭메뉴 누르면 on클래스 추가/제거
    $('.guide .tab_menu button').on('click', function(){
        $('.guide .tab_menu button').removeClass('on')
        $(this).addClass('on')
        console.log('클릭되는거야?')
    })
    
    //탭1번 누르면 guide_bottom ul li.menu1 추가/삭제
    $('.guide .tab_menu button.menu1').on('click', function(){
        $('.guide .guide_bottom ul li').removeClass('on')
        $('.guide .guide_bottom ul li.menu1').addClass('on')
        
    })

    $('.guide .tab_menu button.menu2').on('click', function(){
        $('.guide .guide_bottom ul li').removeClass('on')
        $('.guide .guide_bottom ul li.menu2').addClass('on')
        
    })
    $('.guide .tab_menu button.menu3').on('click', function(){
        $('.guide .guide_bottom ul li').removeClass('on')
        $('.guide .guide_bottom ul li.menu3').addClass('on')
       
    })
    $('.guide .tab_menu button.menu4').on('click', function(){
        $('.guide .guide_bottom ul li').removeClass('on')
        $('.guide .guide_bottom ul li.menu4').addClass('on')
        
    })
    $('.guide .tab_menu button.menu5').on('click', function(){
        $('.guide .guide_bottom ul li').removeClass('on')
        $('.guide .guide_bottom ul li.menu5').addClass('on')
       
    })
    $('.guide .tab_menu button.menu6').on('click', function(){
        $('.guide .guide_bottom ul li').removeClass('on')
        $('.guide .guide_bottom ul li.menu6').addClass('on')
        
    })


    gsap.from(".tiping", {duration: 3, text: ""}) 



    const room_swiper = new Swiper('.room .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            640: {    /* 640px 이상일때 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 40,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.room .swiper-button-next',
            prevEl: '.room .swiper-button-prev',
        },
        
    });







})