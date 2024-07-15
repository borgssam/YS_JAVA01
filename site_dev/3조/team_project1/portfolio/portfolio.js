$(function(){
  $("a").click(function(e){
    e.preventDefault();
  });
  // scroll event
  $(window).on('scroll', function(){
    let windowTop = $(this).scrollTop();
    let pfScrollT = parseInt($('#portfolio').offset().top);

    // contact scroll event
    if(windowTop > (pfScrollT-400)){
      $('#portfolio li:nth-child(1) a').animate({
        top : '0'
      }, 800, "easeOutQuad");
      $('#portfolio li:nth-child(2) a').animate({
        top : '0'
      }, 1000, "easeOutQuad");
      $('#portfolio li:nth-child(3) a').animate({
        top : '0'
      }, 1200, "easeOutQuad");
      $('#portfolio li:nth-child(4) a').animate({
        top : '0'
      }, 1400, "easeOutQuad");
    }// contact scroll event end

    // contact scroll event
    if(windowTop > pfScrollT){
      $('#portfolio li:nth-child(5) a').animate({
        top : '0'
      }, 800, "easeOutQuad");
      $('#portfolio li:nth-child(6) a').animate({
        top : '0'
      }, 1000, "easeOutQuad");
      $('#portfolio li:nth-child(7) a').animate({
        top : '0'
      }, 1200, "easeOutQuad");
      $('#portfolio li:nth-child(8) a').animate({
        top : '0'
      }, 1400, "easeOutQuad");
    }// contact scroll event end

  })// scroll event end
  
  // click filter event
  $('#portfolio .portfolio-list li').on('click', function(){
    const menu = $(this).children('a');
    const menuAll = $('.portfolio-list li a');
    const menuText = $(this).children('a').text();
    const imgTxt = $('#portfolio .portfolio-img_section li');
    const menuAddActive = function(){menu.addClass('active');}
    const menuRemoveActive = function(){menuAll.removeClass('active');}

    if(menuText == 'all'){
      menuRemoveActive();
      menuAddActive();
      imgTxt.hide();
      $('#portfolio-img_section .all').fadeIn(800);
    } 
    if(menuText == 'web'){
      menuRemoveActive();
      menuAddActive();
      imgTxt.hide();
      $('#portfolio-img_section .web').fadeIn(800);
    } 
    if(menuText == 'advertising'){
      menuRemoveActive();
      menuAddActive();
      imgTxt.hide();
      $('#portfolio-img_section .advert').fadeIn(800);
    } 
    if(menuText == 'branding'){
      menuRemoveActive();
      menuAddActive();
      imgTxt.hide();
      $('#portfolio-img_section .branding').fadeIn(800);
    } 
    if(menuText == 'design'){
      menuRemoveActive();
      menuAddActive();
      imgTxt.hide();
      $('#portfolio-img_section .design').fadeIn(800);
    } 
    if(menuText == 'photography'){
      menuRemoveActive();
      menuAddActive();
      imgTxt.hide();
      $('#portfolio-img_section .photography').fadeIn(800);
    } 

  }) // click filter event end
});