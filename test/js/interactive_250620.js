$(document).ready(function(){
    //console.log('나오나ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ')

    let scrolling
    let window_h 
    let slogan =  $('.slogan')
    let slogan_obj = $('.slogan p span')
    let slogan_leng = slogan_obj.length
    let slogan_scroll //슬로건 start에서부터 스크롤된 값
    let slogan_top //슬로건이 위에서부터 얼마나 떨어졌는지 거리
    let slogan_start //애니메이션 시작점
    let slogan_end //애니메이션 종료점
    let slogan_w // span 태그 넓이값


    $('.slogan p span').eq(1).hide()


    function slogan_ani(){
        slogan_top = slogan.offset().top //위에서 떨어진 값 계산법
        slogan_start = slogan_top - window_h + (window_h * 0.1)
        //console.log('스크롤',scrolling,'start', slogan_start)
        //스크롤값과 start값이 같을때 ani시작이고
        slogan_end = slogan_top + slogan.height() - window_h + (window_h * 0.1)
        //console.log('scroll',scrolling, 'end',slogan_end)
        //end값과 스크롤값이 같을때 ani 종료인거다

        


        if(slogan_start > scrolling){
            console.log ('시작 이전')
        }else if(slogan_end < scrolling){
            console.log('애니메이션중')
        }else{
            console.log('종료')
        }
            


    }
    






    let Business = $('.Business') // 이건 end점은 없다
    let Business_top
    let Business_start 

    scroll_chk() //브라우저가 로딩됐을때 1번
    $(window).scroll(function(){
        scroll_chk()//스크롤 할때마다 1번씩
        resize_chk()
        slogan_ani()
        
    })
    $(window).resize(function(){ //브라우저가 리사이즈될때마다 한번씩
        slogan_ani()
        resize_chk()
    })
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        //console.log(scrolling)
        //console.log('스크롤값', scrolling)
    }

    function resize_chk(){
        window_h = $(window).height()
        //console.log('브라우저높이', window_h )
    }
   

















})