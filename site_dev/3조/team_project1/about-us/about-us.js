$(function(){
  // about us scroll event
  $(window).on('scroll', function(){
    let windowTop = $(this).scrollTop();
    let svScrollT = $('#about').offset().top;
    let svWrapH = $('#about').innerHeight();


    if(windowTop > (svScrollT - (svWrapH/2))){
      $('#about #images .img1 img').animate({
        opacity : '1'
      }, 800, "swing");
      $('#about #images .img2 img').animate({
        opacity : '1'
      }, 1400, "swing");
      $('#about #BI > div').animate({
        opacity : '1'
      }, 1800, "swing");
    }
  }) // about us scroll end
})