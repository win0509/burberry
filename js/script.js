
$(document).ready(function(){
  //AOS
  AOS.init();

  // AOS는 스크롤 내릴때영향을 받는데 풀페이지 적용시 스크롤이 없어지기 때문에 충돌함 출력안됨
  //  그래서 scrollBar : true 스크롤바 생성해주기


  //배너 스와이퍼
    var swiper = new Swiper(".mySwiper", {
      loop:true,
      effect:"fade",
      autoplay:{
        delay:2500
      },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
       
        },

        
    });
   

    media(); //함수 호출 
    var ww = $(window).width();
    
    function media(){
      
      if(ww >= 1200){


    // 풀페이지 플러그인
      new fullpage('#wrap', {
        anchors: ['firstPage','secondPage','3rdPage','4rdPage','5rdPage','6rdPage'],
        scrollBar : true
        // 새로고침해도 원하는 페이지로 돌아옴
       
      });


    //서브메뉴박스 
    $('.menu li').mouseenter(function(){

      // $(this).addClass('active');
      // $(this).siblings().removeClass('active');

      var result = $(this).attr('data-alt');
      $('.sub-menu').removeClass('active');

      $(`#${result}`).addClass('active');

      $('.sub-menu-box').stop().slideDown().addClass('active');

      //   $('.sub-menu-box').slideDown('active');
      //   $(this).addClass('active');

      //   var tab = $(this).attr('data-alt')

      // });
      
      // $('.menu li').mouseleave(function(){
      //   $('.sub-menu-box').slideUp('active')

      });

      //서브메뉴박스에서 마우스리브되어야 메뉴가 없어짐
      $('.sub-menu-box').mousseleave(function(){
        $(this).stop().slideUp().removeClass('active');
        });
      

        //sec-4 fade=gallery
        $('.inner-gallery').mouseenter(function(){

          var ch = $(this).attr('data-image');

          $('.fade-gallery-photo').css({
            'background-image' : `url(${ch})`
          });
        });
        $('.inner-gallery').mouseleave(function(){
          $('.fade-gallery-photo').css({
            'background-image' : ''
          });
        });

          }else{
            //스크롤 이벤트
            //스크롤탑 값이 300px 초과하면 header-area, header-logo영역 active 추가 그밖에 경우 제거
            $(window).scroll(function(){
              if($(window).scrollTop() > 300){
                $('.header-area').addClass('active');
                $('.header-logo').addClass('active');
              }else{
                $('.header-area').removeClass('active');
                $('.header-logo').removeClass('active');
              }
            });
            //햄버거 버튼 서브메뉴
            $('#hamburger').click(function(){
              $(this).toggleClass('active');
              $('nav').toggleClass('active');
            });
          }

          $(window).resize(function(){
            ww =$(window).width();
            media();
          });



  }//미디어쿼리 함수안에 담아줌


}); //end