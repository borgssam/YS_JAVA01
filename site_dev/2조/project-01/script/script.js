$(function () {
    //메뉴 슬라이드 부분
    $("ul.head-main-menu>li:not(:first-child)").mouseover(function () {
        $(this).children().last().stop().fadeIn(200)
    })
    $("ul.head-main-menu>li:not(:first-child)").mouseleave(function () {
        $(this).children().last().stop().fadeOut(200)
    })

    $("ul.head-sub-menu>li:has(ul.head-sub-menu-sub)").mouseover(function () {
        $(this).children().last().stop().fadeIn(200)
    })
    $("ul.head-sub-menu>li:has(ul.head-sub-menu-sub)").mouseleave(function () {
        $(this).children().last().stop().fadeOut(200)
    })
})

//  서브페이지 메인내비
$(function () {
    $('#nav-second').hover(function () {
        $('.hidden').css('display', 'block');
    }, function () {
        $('.hidden').css('display', 'none');
    });
});

$(function () {
    $('.main-nav-box>').hover(function () {
        $(this).css('color', '#676ba7');
    }, function () {
        $(this).css('color', 'black');
        $('#this-page').css('color', '#676ba7');
    });
});
$(function () {
    $('.not-select').hover(function () {
        $(this).css('border', '3px solid #676ba7');
    }, function () {
        $(this).css('border', '');
    });
});
//  서브페이지 메인내비

//슬라이드------//
function slide(e) {
    // 클래스가 "scroll_on"인 모든 요소를 선택합니다.
    const $counters = $(e);

    // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정합니다.
    const exposurePercentage = 100; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
    const loop = true; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)

    // 윈도우의 스크롤 이벤트를 모니터링합니다.
    $(window).on('scroll', function () {
        // 각 "scroll_on" 클래스를 가진 요소에 대해 반복합니다.
        $counters.each(function () {
            const $el = $(this);

            // 요소의 위치 정보를 가져옵니다.
            const rect = $el[0].getBoundingClientRect();
            const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
            const contentHeight = rect.bottom - rect.top; // 요소의 높이

            // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
            if (rect.top <= winHeight - (contentHeight * exposurePercentage /
                    100) && rect.bottom >= (contentHeight * exposurePercentage /
                    100)) {
                $el.addClass('active');
            }
            // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
        });
    }).scroll();
};
//슬라이드----------//
//서브페이지1-1-1 메인내용// 
$(function () {
    slide('.content_header');
});
$(function () {
    slide('.content_header-2');
});
$(function () {
    slide('.content_section');
});
//서브페이지1-1-1 메인내용// 
// 서브페이지 1-1-2 메인내용

$(function () {
    slide('.first-content-section');
});
$(function () {
    slide('.second-content-section');
});
$(function () {
    slide('.third-content-section');
});
// 서브페이지 1-1-2 메인내용
//서브페이지 1-2-1 메인내용
$(function () {
    slide('.content-first');
});
$(function () {
    slide('.content-second');
});
$(function () {
    slide('.content-third');
});
$(function () {
    slide('#down');
});
//서브페이지 1-2-1 메인내용

// 검색바
let searchToggle = false
$(function(){
    $(".head-search").hide()
    

    $(".icon li:first-child").click(function(){
        searchToggle ? $(".head-search").hide() : $(".head-search").show()
        searchToggle = !searchToggle
    });
});
// 검색바