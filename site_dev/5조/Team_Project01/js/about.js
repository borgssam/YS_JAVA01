$(function () {
    console.log("About 제이쿼리 테스트")
    // Scroll btn hover effect
    var tm = 0;
    $('.scroll-page__btn').hover(function() {
        if($(this).hasClass('jsScrollUp')) {
            $(this).find('.jsScrollTxt').each(function(e) {
                tm += 150;
                $('.jsScrollUp .jsScrollTxt:eq('+e+')').stop(true,false).delay(tm).animate({'bottom':'10px'});
            });
        } else {
            $(this).find('.jsScrollTxt').each(function(e) {
                tm += 150;
                $('.jsScrollDown .jsScrollTxt:eq('+e+')').stop(true,false).delay(tm).animate({'top':'10px'});
            });
        }
        tm = 0;
    }, function() {
        if($(this).hasClass('jsScrollUp')) {
            $(this).find('.jsScrollTxt').each(function(e) {
                tm += 150;
                $('.jsScrollUp .jsScrollTxt:eq('+e+')').stop(true,false).delay(tm).animate({'bottom':'0px'});
            });
        } else {
            $(this).find('.jsScrollTxt').each(function(e) {
                tm += 150;
                $('.jsScrollDown .jsScrollTxt:eq('+e+')').stop(true,false).delay(tm).animate({'top':'0px'});
            });
        }
        tm = 0;
    });

    // Scroll btn click effect
    $('.jsScrollTxt').click(function() {
        if($(this).parent().hasClass('jsScrollUp')) {
            console.log("위로 클릭");
            $('html,body').stop(true,true).animate({scrollTop: $('html, body').offset().top},600,'swing');
        } else {
            console.log("아래로 클릭");
            $('html,body').stop(true,true).animate({scrollTop: $(document).outerHeight()},600,'swing');
        }
    });

    // Scroll btn display
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    if(docHeight > winHeight * 1.5) {
        console.log("Scroll btn display");
        $('.scroll-page').addClass('on');
    }
    
    // Scroll btn footer pos
    if($('.scroll-page').hasClass('on')) {
        console.log("Scroll btn footer pos");
        var getScroll = $(window).scrollTop();
        var winHeight = $(window).height()-50;
        var cutLine = getScroll + winHeight;
        var footerPos = $('.jsFooter').offset().top;
        var footerPadding = $('.jsFooter').css('padding-top');
                var getTopBanHeight = $('.top-banner').height();
        if(getScroll >= getTopBanHeight) {
            $('.header__wrap').addClass('pos-up');
        }
        if(getScroll < getTopBanHeight) {
            $('.header__wrap').removeClass('pos-up');
        }
        if(getScroll >= winHeight/2) {
            $('.scroll-page').addClass('fade-in');
        }
        if(getScroll < winHeight) {
            $('.scroll-page').removeClass('fade-in');
        }
        if(cutLine >= footerPos+parseInt(footerPadding)) {
            $('.scroll-page').css('bottom', cutLine - (footerPos+parseInt(footerPadding)));
        }
        if(cutLine < footerPos+parseInt(footerPadding)) {
            $('.scroll-page').css('bottom', 0);
        }
    }
});