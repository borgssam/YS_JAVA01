
$(function(){

  $(window).on('scroll', function(){
    let windowTop = $(this).scrollTop();
    let svScrollT = $('#ourService').offset().top;
    let svWrapH = $('#ourService').innerHeight();
    // let workScrollT = $('#work').offset().top;
    // let workWrapH = $('#work').innerHeight();

    // section#ourService 애니메이션 효과
    if(windowTop > (svScrollT - (svWrapH/2))){
      $('#ourService .serviceItem:nth-child(1)').animate({
        opacity : '1',
        top : '0'
      }, 1000, "easeOutQuad");
      $('#ourService .serviceItem:nth-child(2)').animate({
        opacity : '1',
        top : '0'
      }, 1200, "easeOutQuad");
      $('#ourService .serviceItem:nth-child(3)').animate({
        opacity : '1',
        top : '0'
      }, 1400, "easeOutQuad");
      $('#ourService .serviceItem:nth-child(4)').animate({
        opacity : '1',
        top : '0'
      }, 1600, "easeOutQuad");
      $('#ourService .serviceItem:nth-child(5)').animate({
        opacity : '1',
        top : '0'
      }, 1800, "easeOutQuad");
      $('#ourService .serviceItem:nth-child(6)').animate({
        opacity : '1',
        top : '0'
      }, 2000, "easeOutQuad");
    }

    // section#wrok 애니메이션 효과
    if(windowTop > svScrollT){

      // opacity, left
      $('#work li.workItem:nth-child(1)').animate({
        opacity: '1',
        left: '0'
      }, 1600, "easeInOutQuad");
      $('#work li.workItem:nth-child(2)').animate({
        opacity: '1',
        left: '0'
      }, 1800, "easeInOutQuad");
      $('#work li.workItem:nth-child(3)').animate({
        opacity: '1',
        left: '0'
      }, 2000, "easeInOutQuad");
      $('#work li.workItem:nth-child(4)').animate({
        opacity: '1',
        left: '0'
      }, 2200, "easeInOutQuad");


      // count animate
      $('.wItemNumText').each(function(){
        $(this).prop('Counter', 0).animate({
                Counter: $(this).data('value')
        }, {
          duration: 3200,
          easing: 'swing',
          step: function(now){
            $(this).text(Math.ceil(now));
          }
        })
      });

    }; // #work scroll event end

  }); // window scroll event end

});