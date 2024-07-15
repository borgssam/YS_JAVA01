$(function(){
  // company scroll event
  $(window).on('scroll', function(){
    let windowTop = $(this).scrollTop();

    // company scroll event
    if(windowTop > 1000 ){
      $('#company .boxContentsWrap').animate({
        opacity: '1',
        top : '0'
      }, 1000, "swing");
    } // about us scroll end

  }) // company scroll end

})