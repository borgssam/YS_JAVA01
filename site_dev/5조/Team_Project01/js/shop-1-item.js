$(function () {
    let slide;
    function slideImg() {
        $('#bottomZone>.bestItem>.items>ul.items_container').animate({
            'marginLeft': '-242px'
        }, 700, function () {
            $('#bottomZone>.bestItem>.items>ul.items_container>li:first').appendTo('#bottomZone>.bestItem>.items>ul.items_container');
            $('#bottomZone>.bestItem>.items>ul.items_container').css('margin-left', '0')
        });
    }
    function color_box_border() {
        $('.color>.color_box>div').css('border', 'none');
        $(this).parent().css('border', '1px solid rgba(83, 92, 76, 0.79)');
    }
    $('body').animate({'opacity':'1'},1000);
    $('.subImg>img').on('mouseover', function () {
        let imgAddr = $(this).attr('alt');
        $('.subImg>img').removeClass('active');
        $(this).addClass('active');
        $('.mainImg>img').attr('src', imgAddr);
    });
    $('.detail').on('click', function () {
        let data = $(this).attr('data');
        if (data == 'active') {
            $('.detail_content').slideUp();
            $(this).attr('data', 'unactive');
            $('.detail>div>p:nth-child(2)').css('transform', 'rotate(-90deg)');
        } else {
            $('.content').slideUp();
            $('.header').attr('data', 'unactive');
            $('.detail_content').slideDown();
            $(this).attr('data', 'active');
            $('.detail>div>p:nth-child(2)').css('transform', 'rotate(90deg)');
        }
    });
    $('.delivery_info').on('click', function () {
        let data = $(this).attr('data');
        if (data == 'active') {
            $('.delivery_content').slideUp();
            $(this).attr('data', 'unactive');
            $('.delivery_info>#arrow').css('transform', 'rotate(-90deg)');
        } else {
            $('.content').slideUp();
            $('.header').attr('data', 'unactive');
            $('.delivery_content').slideDown();
            $(this).attr('data', 'active');
            $('.delivery_info>#arrow').css('transform', 'rotate(90deg)');
        }
    });
    $('.refund_info').on('click', function () {
        let data = $(this).attr('data');
        if (data == 'active') {
            $('.refund_content').slideUp();
            $(this).attr('data', 'unactive');
            $('.refund_info>#arrow').css('transform', 'rotate(-90deg)');
        } else {
            $('.content').slideUp();
            $('.header').attr('data', 'unactive');
            $('.refund_content').slideDown();
            $(this).attr('data', 'active');
            $('.refund_info>#arrow').css('transform', 'rotate(90deg)');
        }
    });
    $('.color>.color_box>div:nth-child(1)>div').on('click', color_box_border);
    $('.color>.color_box>div:nth-child(2)>div').on('click', color_box_border);
    $('.color>.color_box>div:nth-child(3)>div').on('click', color_box_border);
    slide = setInterval(slideImg, 3000);
    $('#bottomZone>.bestItem>.title>p.next').on('click', function () {
        if (!$('#bottomZone>.bestItem>.items>ul.items_container').is(':animated')) {
            clearInterval(slide);
            $('#bottomZone>.bestItem>.items>ul.items_container').animate({
                'marginLeft': '-242px'
            }, 700, function () {
                $('#bottomZone>.bestItem>.items>ul.items_container>li:first').appendTo('#bottomZone>.bestItem>.items>ul.items_container');
                $('#bottomZone>.bestItem>.items>ul.items_container').css('margin-left', '0')
            });
            slide = setInterval(slideImg, 3000);
        }
    });
    $('#bottomZone>.bestItem>.title>p.prev').on('click', function () {
        if (!$('#bottomZone>.bestItem>.items>ul.items_container').is(':animated')) {
            clearInterval(slide);
            $('#bottomZone>.bestItem>.items>ul.items_container').css('margin-left', '-242px');
            $('#bottomZone>.bestItem>.items>ul.items_container>li:last').prependTo('#bottomZone>.bestItem>.items>ul.items_container');
            $('#bottomZone>.bestItem>.items>ul.items_container').animate({
                'marginLeft': '0px'
            }, 700, function () {
                // 애니메이션이 완료된 후 수행할 작업
            });
            slide = setInterval(slideImg, 3000);
        }
    });
    $('#bottomZone>.review>.title>p').on('click',function(){
        $('#bottomZone>.review>.title>p').removeClass('active')
        $(this).addClass('active')
    });
    $('#bottomZone>.review>.title>p:first').on('click',function(){
        $('#bottomZone>.review>.title>a').text('리뷰 전체보기');
        $('#bottomZone>.review>.title>a').attr('href','/community/_Review.html');
        $('#bottomZone>.review>.inquiry').slideUp(500,function(){
            $('#bottomZone>.review>.review_box').slideDown(1000);
        });
        
    });
    $('#bottomZone>.review>.title>p:last').on('click',function(){
        $('#bottomZone>.review>.title>a').text('문의 전체보기');
        $('#bottomZone>.review>.title>a').attr('href','/community/_Q&A.html');
        $('#bottomZone>.review>.review_box').slideUp(1000,function(){
            $('#bottomZone>.review>.inquiry').slideDown(500);
        });
        
    });
    $('#bottomZone>.review>.review_box>.slide_btn>p:first').on('click',function(){
        $('#bottomZone>.review>.review_box>.review_contents>.slide_img').animate({
            'marginLeft':'0'
        })
    });
    $('#bottomZone>.review>.review_box>.slide_btn>p:last').on('click',function(){
        $('#bottomZone>.review>.review_box>.review_contents>.slide_img').animate({
            'marginLeft':'-162px'
        })
    });
    $('#bottomZone>.review>.review_box>.review_contents>.slide_img>img').on('click',function(){
        let Addr = $(this).attr('src');
        $('.review>.review_detail>.contents>.contents_left>img').attr('src',Addr);
        $('.review_detail').css('display','block');
        $('.review_detail').animate({
            'opacity':'1'
        },600);

    });
    $('#bottomZone>.review>.review_box>.review_contents>.control_box>p').on('click',function(){
        $('#bottomZone>.review>.review_box>.review_contents>.control_box>p').removeClass('active');
        $(this).addClass('active');
    });
    $('#bottomZone>.review>.review_box>.review_contents>.control_box>span:nth-of-type(1)').on('click',function(){
        $('#bottomZone>.review>.review_box>.review_contents>.control_box>p').removeClass('active');
        $('#bottomZone>.review>.review_box>.review_contents>.control_box>p:nth-of-type(1)').addClass('active');
    });
    $('#bottomZone>.review>.review_box>.review_contents>.control_box>span:nth-of-type(2)').on('click',function(){
        $('#bottomZone>.review>.review_box>.review_contents>.control_box>p').removeClass('active');
        $('#bottomZone>.review>.review_box>.review_contents>.control_box>p:nth-of-type(2)').addClass('active');
    });
    $('.review_detail>.background').on('click',function(){
        $('.review_detail').animate({
            'opacity':'0'
        },600,function(){
            $('.review_detail').css('display','none');
        });
    });
    $('.review>.review_detail>.contents>.contents_right>.top>p:nth-of-type(2)').on('click',function(){
        $('.review_detail').animate({
            'opacity':'0'
        },600,function(){
            $('.review_detail').css('display','none');
        });
    });
});