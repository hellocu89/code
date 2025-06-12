$(document).ready(function(){
    
    let scrolling //브라우저가 스크롤된 값
    let window_h //브라우저 높이
    let obj_name = $('.ctn_history .his_photo')
    let obj_photo
    let obj_photo_top
    let obj_photo_show 
    let obj_nav = $('.ctn_history .his_nav')
    let obj_nav_area = $('.ctn_history')
    let obj_nav_start //보이기 시작하는 스크롤 값
    let obj_nav_end //보이는 마지막 스크롤 값
   
    function nav_show(){
        obj_nav_start = obj_nav_area.offset().top
        obj_nav_end = obj_nav_start + obj_nav_area.height() - window_h
        //console.log('스크롤', scrolling, '종료', obj_nav_end)
        if((scrolling > obj_nav_start) && (scrolling < obj_nav_end)){
            obj_nav.addClass('active')
        }else{
            obj_nav.removeClass('active')
        }
    }
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        //console.log('스크롤', scrolling, 'photo', obj_photo_top, '브라우저', window_h)
    }
    function resize_chk(){
        window_h = $(window).height()
    }
    function photo_show(){
        for(i = 0; i < obj_name.length; i++){
            //console.log(i)
            obj_photo = obj_name.eq(i)
            obj_photo_top = obj_photo.offset().top
            obj_photo_show = (window_h + scrolling) - obj_photo_top - obj_photo.height()
            //console.log('스크롤', scrolling, 'photo', obj_photo_top, '브라우저', window_h)
            //console.log(obj_photo_show)
            if(obj_photo_show > 0){
                obj_photo.addClass('active')
            }else{
                obj_photo.removeClass('active')
            }
        }
    }
    

    $(window).scroll(function(){
        //스크롤 할때마다 한번씩 실행
        scroll_chk()
        photo_show()
        nav_show()
    })
    $(window).resize(function(){
        //브라우저가 리사이즈 될때마다 한번씩 실행
        resize_chk()
        photo_show()
        nav_show()
    })

    scroll_chk() //문서가 로딩 되었을때 단한번
    resize_chk()
    photo_show()
    nav_show()



    /********nav 메뉴 선택 클릭 이동**************/
    let menuName = $('.ctn_history .his_nav')  // 상단에 고정할 메뉴 영역 선택자
    let menuItem = $('.ctn_history .his_nav ul li') // data-link 값을 준 클릭할 요소의 선택자
    let sectionName
    let moveTop
    let areaTop
    let areaH
    let areaName
    let scrollTop
    menuItem.on('click', function(){
        sectionName = $(this).attr('data-link')
        moveTop = $('*[data-menu="'+sectionName+'"]').offset().top - menuName.height()
        $('html, body').animate({
            scrollTop : moveTop
        }, 500)
    })
    menuChk()
    $(window).scroll(function(){
        menuChk()
    })
    function menuChk(){
        scrollTop = $(window).scrollTop()
        $.each($('*[data-menu]'), function(idx, item){
            areaTop = $('*[data-menu]').eq(idx).offset().top
            areaH = $('*[data-menu]').eq(idx).height()
            areaName = $('*[data-menu]').eq(idx).attr('data-menu')
            if((scrollTop >= areaTop - menuName.height()) && (scrollTop < areaTop + areaH - menuName.height())){
                menuItem.removeClass('active')
                menuItem.siblings('[data-link="'+areaName+'"]').addClass('active')
            }else if(scrollTop < $('*[data-menu]').first().offset().top){
                menuItem.removeClass('active')
            }else if(scrollTop > $('*[data-menu]').last().offset().top + $('*[data-menu]').last().height()){
                menuItem.removeClass('active')
            }
        });
    }
})