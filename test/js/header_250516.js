$(document).ready(function(){
    /*
       header에 fixed 클래스를 주는것!!!
       1. 브라우저가 조금이라도 스크롤이 되면 header에 fixed 클래스 추가
          스크롤값이 0보다 크면(0포함 안함)
       2. 다시 브라우저 상단으로 스크롤 되면 header에 fixed 클래스 삭제
          스크롤값이 0이거나 그보다 작으면

       클래스를 주는 명령어

       브라우저가 스크롤되는 걸 체크할 수 있는 명령어를 알아야함

    */

//$('header').addClass('abc')
//$('header').removeClass('abc')

//html이 로딩된 이후 단 1번만 실행(ready때문에)
let scrolling //let도 scrolling이라는 함수 선언했어요 의미
scroll_chk()//함수를 호출해서 여기서 실행하는것(함수의 실행)

function scroll_chk(){
    //함수 선언(scroll_chk라는 함수를 선언했어요! 라는 의미)
    scrolling = $(window).scrollTop()
    console.log(scrolling)

    if(scrolling > 0){ //스크롤 된 값이 0보다크면
        //console.log('0보다 크다')
        $('header').addClass('fixed')
    }else{//그외 나머지 전부(0이거나 0보다 작으면)
        //console.log('0이다')
        $('header').removeClass('fixed')
    }
}


$(window).scroll(function(){
    //스크롤 할때마다 1번씩 실행하는것-스크롤하지 않으면 실행하지 않아XXXXXXXX
    scroll_chk()//함수를 호출해서 여기서 실행하는것(함수의 실행)
})


})//$(document).ready

