$('#menu li, #logo, #tel').hover(function () {
    // over
    $(this).css("cursor", "pointer");
  }, function () {
    // out
    $(this).css("cursor", "");
  }
);

$(".logo").click(function (e) { 
  e.preventDefault();
	$('html, body').animate({scrollTop: 0}, 500);
});

$("#menu > li").click(function (e) {
  e.preventDefault();
	let offset = $($(this).attr('data')).offset();
  let test = $(this).attr('class', 'active');

  if( test == 'active'){
    $('#menu > li.menuItem').removeClass('active');
  } else {
    $(this).addClass('active');
  }
  $('html, body').animate({scrollTop : offset.top - 79 +'px'}, 1000, 'easeInOutCubic');
});


$(document).scroll(function () { 
  if($(document).scrollTop() == 0) {
    $(".menu li").css("color", "");
    $(".tel p").css("color", "");
    $(".nav").css({
      "background-color" : "",
      "border-bottom" : "none"
    });
    $(".tel").css("border-color", "");
    $(".tel span").css("background-image", "url(./img/navIcon-1.png)");
    $(".logo img").attr("src", "./img/logo-white.png");
  } else {
    $(".menu li").css("color", "black");
    $(".tel p").css("color", "black");
    $(".nav").css({
      "background-color" : "#fff",
      "border-bottom" : "1px solid rgba(0,0,0,.1)"
    });
    $(".tel").css("border-color", "black");
    $(".tel span").css("background-image", "url(./img/navIcon-2.png)");
    $(".logo img").attr("src", "./img/logo.png");
  }

  // 각각의 섹션 offset.top 저장.
  let windowTop = $(this).scrollTop();
  const aboutTop = $('#aboutWrap').offset().top;
  const serviceTop = $('#ourServiceWrap').offset().top;
  const portfolioTop = $('#portfolioWrap').offset().top;
  const clientTop = $('#clientWrap').offset().top;
  const contactTop = $('#contactWrap').offset().top;
  let miNum = 85;

  if((aboutTop - miNum) > windowTop){
    $('#menu > li').removeClass('active');
  }
  if( windowTop > (aboutTop - miNum) ){
    $('#menu > li').removeClass('active');
    $('#mAbout').addClass('active');
  }
  if( windowTop > (serviceTop - miNum) ){
    $('#menu > li').removeClass('active');
    $('#mService').addClass('active');
  }
  if( windowTop > (portfolioTop - miNum) ){
    $('#menu > li').removeClass('active');
    $('#mPortfolio').addClass('active');
  }
  if( windowTop > (clientTop - miNum) ){
    $('#menu > li').removeClass('active');
    $('#mClient').addClass('active');
  }
  if( windowTop > (contactTop - miNum) ){
    $('#menu > li').removeClass('active');
    $('#mContact').addClass('active');
  }
});

