function onLoadWindow(){
    $('.gnb-btn-box>a').hover(function(){
        let lstDetail = $(this).next();
        if(lstDetail.attr('class') =='gnb-detail-list')
            lstDetail.css('display','block');
    },function(){
        let lstDetail = $(this).next();
        if(lstDetail.attr('class') =='gnb-detail-list')
            lstDetail.css('display','none');
    });        
}

// 스크립트 내부에 includeHTML 사용할 것
$(function(){
    includeHTML('header_window','sample_header_window.html',onLoadWindow);
});