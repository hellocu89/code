$(document).ready(function(){

    const myFullpage = new fullpage('#fullpage', {   /* html에서 페이지 전체를 감싸는 요소 */ 

		Navigation: true, /* 오른쪽에 각 페이지의 paging */ 
		NavigationPosition: 'right', /* 위치 */ 
		NavigationTooltips: ['MAIN', '공연/행사안내', '사업안내', '공지사항'], /*툴팁 */ 
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 */ 
		
		lockAnchors: true, 앵커: ['visual', 'perfor', 'biz', 'notice'], /* href="#link1" 방식으로 코딩하면 해당 링크명으로 이동 */ 

		autoScrolling:true, /* 한페이지씩 스크롤 */         
		scrollHorizontally: true, 
        
        VerticalCentered: true, /* 컨텐더 위키는 중앙에 */ 
		
		scrollOverflow: true, /* 컨텐츠가도 이동 금지 */ 

        afterLoad: function(origin, destination, direction, trigger){
			if(destination.index == 2){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
				console.log('3번째 슬라이드가 로딩 되었을때');
			}
		},

		responsiveWidth: 640 /* fullpage를 적용시키지 않을 모바일 사이즈 */
        
	});//fullpage







		
})