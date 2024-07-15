// 헤더영역 검색
$(function(){
    $('.imgSearch').on('click', function(){
        $('#searchImg').slideDown(500,'swing');
        $('#searchImg').css('display','block');
    });
    $('.searchClose>img').on('click', function(){
        $('#searchImg').slideUp(500,'swing');
    });
});        
