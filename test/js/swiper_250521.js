$(document).ready(function(){
    
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        //  autoplay: {  /* 팝업 자동 실행 */
        //      delay: 2500,
        //      disableOnInteraction: true,
        // },

        effect: "fade", /* fade 효과 */

    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

    pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
        el: '.visual .paging', /* 해당 요소의 class명 */
        clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        //type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        //renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
        //   return '<span class="' + className + '">' + (index + 1) + "</span>";
        //},
    },
        

    navigation: {  /* 이전, 다음 버튼 */
        nextEl: '.visual .btn_next',  /* 다음 버튼의 클래스명 */
        prevEl: '.visual .btn_pre',  
    },

    });





    const biz_swiper = new Swiper('.biz .swiper', { /* 팝업을 감싸는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            460: {    /* 460~767px 사이-pc버전일때 */
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
            768: {    /* 768~1023px 사이-pc버전일때 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
            1024: {    /* 1024px 이상일때 적용-pc버전일때 */
            slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
            spaceBetween: 24,
        },
        
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
        
        
    });


    const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 'auto', /* 내가 css에 준 값으로 들어간다는것 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		768: {    /* 640px 이상일때 적용 */
			/*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 24,
		},
	},
    //loop: true,
	
});





})//$(document).ready