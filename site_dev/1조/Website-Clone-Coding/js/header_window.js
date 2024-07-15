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

$(function(){
    includeHTML('test_window','header_window.html',onLoadWindow);
});