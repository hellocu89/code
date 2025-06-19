$(document).ready(function(){

    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: true, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'left', /* 위치 */
		navigationTooltips: ['Main', '나무심기', '숲 활동', '활동이야기', 'footer'], /* 툴팁 */
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */
		
		lockAnchors: false,
		anchors: ['main', 'tree', 'work', 'story', 'footer'], /* href="#link1" 이렇게 코딩하면 해당 링크명으로 이동 */

		autoScrolling:true, /* 한페이지씩 스크롤 */
		scrollHorizontally: true,

		verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
		
		scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

		afterLoad: function(origin, destination, direction, trigger){
			if(destination.index == 0){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
				//console.log('1번째 슬라이드가 로딩 되었을때');
				$('body').removeClass('bg_white')
			}else if(destination.index == 1){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
				//console.log('2번째 슬라이드가 로딩 되었을때');
				$('body').addClass('bg_white')
				/******** tree 숫자가 넘어가는 애니메이션 **********  */
				$('.counter').counterUp();
			}else if(destination.index == 2){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
				//console.log('3번째 슬라이드가 로딩 되었을때');
				$('body').removeClass('bg_white')
			}else if(destination.index == 3){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
				//console.log('4번째 슬라이드가 로딩 되었을때');
				$('body').addClass('bg_white')
			}
		},

		responsiveWidth: 1025, /* fullpage를 적용시키지 않을 모바일 사이즈 (768부터 모바일) */
        responsiveHeight: 700 /* 브라우저 높이가 700이하로 줄면 fullpage 안함 */
	});//fullpage


	/******************************************************
	 * aside quick 열고 닫기
	 * 닫혀있을때 (open클래스가 있을때) - close클래스 교체, detail 보임
	 * 열려있을때 (open클래스가 없을때) - open클래스 교체, detail 숨김
	 */

	$('.quick .btn').on('click', function(){
		//console.log('누름!!!!!!!!!!!!!!!!!!!!!!!!')
		if($(this).hasClass('open') == true){
			$(this).removeClass('open')
			$(this).addClass('close')
			$(this).find('span').text('닫기')
			$('.quick .detail').slideDown(200)
		}else{
			$(this).removeClass('close')
			$(this).addClass('open')
			$(this).find('span').text('열기')
			$('.quick .detail').slideUp(100)
		}
	})

	/***************** visual swiper 추가 ********************* */
	let visual_name = ['산림복원 기금 모집','같이가치 매달기부','서울마이트리','고목나무이야기']
	//console.log(visual_name[3]) 숫자가 0부터 시작
	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

		autoplay: {  /* 팝업 자동 실행 */
			delay: 5000,
			disableOnInteraction: true,
		},

		//effect: "fade", /* fade 효과 */

		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.visual .paging', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
			//type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
			renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
				return '<span class="' + className + '">  ' + visual_name[index] + "</span>";
			},
		},

	});
	
	
})