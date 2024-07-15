$(function(){
  // faq-questions click event
  $('.faq-questions').on('click', function(){
    let listToggle = $(this).next().css('display');
    let thisEle = $(this);
    let faqBtn = thisEle.find('.faq-btn');

    $('.faq-btn').text('+');
    if(listToggle == 'none'){
      $('.faq-answer').slideUp();
      faqBtn.text('-');
    } 
    thisEle.next().slideToggle();
  })// faq-questions click event end

  // scroll event
  $(window).on('scroll', function(){
    let windowTop = $(this).scrollTop();
    let contactScrollT = $('.contact_img').offset().top;
    let faqScrollT = $('.contact_menu').offset().top;

    // contact scroll event
    if(windowTop > (contactScrollT - 800)){
      $('.contact_img > .contact_img_item:nth-child(1)').addClass('ani1');
      $('.contact_img > .contact_img_item:nth-child(1)').animate({ opacity : 1}, 1200, "easeOutQuad");
      $('.contact_img > .contact_img_item:nth-child(2)').addClass('ani2');
      $('.contact_img > .contact_img_item:nth-child(2)').animate({ opacity : 1}, 1400, "easeOutQuad");
      $('.contact_img > .contact_img_item:nth-child(3)').addClass('ani3');
      $('.contact_img > .contact_img_item:nth-child(3)').animate({ opacity : 1}, 1600, "easeOutQuad");
    }// contact scroll event end

    // faq scroll event
    if(windowTop > (faqScrollT - 900)){
      $('#contact > .contact_menu > .left-menu').animate({
        top : '0'
      }, 1000, "easeOutQuad");
      $('#contact > .contact_menu > .right-menu').animate({
        top : '0'
      }, 1400, "easeOutQuad");
    } // faq scroll event end

  })// scroll event end
  
});