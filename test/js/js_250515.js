/*
    js에서 html요소를 부를때에는
    html요소가 로딩된 이후에 불러야 함.
    문서의 구조상
    js를 head안에 먼저 부르고
    그 다음 body에 html요소를 씀

*/


$(document).ready(function(){
    //$('.group').addClass('on')
    console.log('document.redy 안..')

    $('.group').on('mouseenter', function(){
        //group에 마우스를 올릴때마다 실행
        $('.group').addClass('on')
        $('.group span').text('오버했음')
    })
    $('.group').on('mouseleave', function(){
        //group에 마우스를 올릴때마다 실행
        $('.group').removeClass('on')
        //console.log('되는거니?')
        $('.group span').text('오버전')
    })

    //문서가 로딩되고 단 1번만 실행
    let scrolling =$(window).scrollTop()
    console.log(scrolling)

    $(window).scroll(function(){
        scrolling =$(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    })
    $('.list ul li').on('mouseenter',function(){
        $(this).addClass('on')
        //li중에서 오버한 li만 지칭하는것
    })

})//$(document).ready



console.log('누가먼저 실행될까요?')