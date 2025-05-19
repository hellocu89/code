$(document).ready(function(){

    /* pc와 mobile을 분리해서 jquery 작동시키거임
        css와 동일하게 브라우저 넓이를 계산해서
        1024 기준으로 
        1024이하는 모바일
        1025이상은 pc버전
    */
        //문서가 로딩되고 단 한번 실행
        let device_status // 현재 디바이스가 pc모드인지 mobile모든인지를 저장

        let window_w //브라우저 넓이가 저장
        device_chk() //함수의 실행

        $(window).resize(function(){ // 브라우저가 리사이즈 될때마다 한번 실행
            device_chk()//함수의 실행
        })


        function device_chk(){//함수의 정의
            window_w = $(window).width()
            console.log(window_w)
            if(window_w > 1024){ //1025부터
                device_status = 'pc'
            }else{
                device_status = 'mobile'
            }
            console.log(device_status)
        }








    /*
        메뉴에 마우스를 오버하면
        메뉴란, header .gnb .gnb_wrap ul.depth1 > li 
        1. header에 menu_over 클래스 추가
            header / addClass
        2. 오버한 1차메뉴 li에 over 클래스 추가
            header .gnb .gnb_wrap ul.depth1 > li 
        3. 다른 메뉴에 마우스를 오버하면 이전에 오버했던 메뉴는 아웃
           (over 클래스 삭제)
        4. 메뉴 영역을 벗어나면 header와 li에 들어간 클래스 삭제
            /removeClass
    */



    // $('header .gnb .gnb_wrap ul.depth1 > li').addClass('over') 
    // $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')    


    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            /* 이전에 마우스를 오버했던 li에서는 over를 삭제해야 하는데
                이전에 마우스를 오버했던 li를 찾는 것이 복잡
                일단 모든 li에 있는 over 클래스를 모두 지우고
                마우스를 오버한 li에만 over를 추가함..
                이럼 이전에 오버했던 li를 정확하게 몰라도 됨 
                ---> 원래 over클래스가 없던 요소는 removeClass줘도 아무일도 안 일어남*/
            $(this).addClass('over') /*over한 li만 this a가아님 */
        }
                
    })

    $('header .gnb').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')

        
    })


    $('header .tnb .search').on('focusin', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')

    })




    /*메뉴는 오버를 감지하는 영역보다 out을 잡아주는 영역이 더 커야한다 */


    /* 
        모바일에서 1차메뉴를 클릭하면 하위메뉴가 열리는 기능
        1. 닫혀있는 메뉴를 클릭하면 열림
           header .gnb .gnb_wrap ul.depth1 > li.open 클래스 추가
        2. 열려있는 메뉴를 다시 클릭하면 닫힘
            removeClass
        3. 이미 하나가 열려있는 상태에서 다른 메뉴를 클릭하면
            이전에 열려있던 메뉴는 닫힘
            ---------메뉴를 클릭했을때
                메뉴가 열려있는 상태라면 나 자신을 닫고 끝나고
                메뉴가 닫혀있는 상태라면 다른 메뉴를 닫고 나만 연다.

                ::메뉴를 클릭했을때 현재 메뉴가 열려있는지 닫혀있는지를 알아야함

                1차메뉴 li에 open클래스가 있으면 열려있는것...
                hasClass


            ---------------------------------------------------------
        4. 모바일에서 1차메뉴를 클릭하면 1차메뉴 a에 입력되어 있는링크 주소로 이동
           메뉴를 안열고
           a태그에 있는 href로 페이지 이동되는것을 막아야함..
           a에 클릭했을때로 선택자 변경
           $(this)가 a가 됨, 나는 li를 선택해야하는데 문제가 생김
           $(this).parents('li')로 클릭한 a의 상위요소 li를 선택
    */

    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault(); //a href로 페이지이동을 막는 명령
            console.log('누름!!!!!!!!!!!!!!!')
            //$(this).parent().addClass('open')

            let depth1_open = $(this).parent('li').hasClass('open')
            //console.log(depth1_open)
            if(depth1_open == true){ //open클래스가 열려있는 상태에
                $(this).parent('li').removeClass('open')
            }else{// 닫혀있는 상태에
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $(this).parent('li').addClass('open')
            }
        }
           
    })


    /*
        메뉴 열기 버튼을 클릭하면 메뉴열림 
        ----header .gnb .gnb_open 클릭하면 header에 menu_open 클래스 추가
        
        메뉴 닫기 버튼을 클릭하며 메뉴닫힘 
        ----header .gnb .gnb_close 클릭하면 header에 munu_open클래스가 삭제
    
            
    
    */
        $('header .gnb .gnb_open').on('click', function(){
            $('header').addClass('menu_open')
        })

        $('header .gnb .gnb_close').on('click', function(){
            $('header').removeClass('menu_open')
        })




})//$(document).ready