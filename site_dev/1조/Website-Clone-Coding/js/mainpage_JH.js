
// 본문 이미지 슬라이딩 표현
$(function(){
    let btnClick = 0;
    index=0;
    function aniSlider(idx){
        $('.leftBtn','.rightBtn').hide();
        $('.slider_panel').css('left', `-${(idx+1) * 100}%`);
        // $('.slider_panel').animate({marginLeft:"-=1000px"},300,'swing',function(){
        //     $('.slider_panel>li:first').appendTo('.slider_panel');
        //     $('.slider_panel').css('margin-left','-1000px');
        //     $('.control_btn').removeClass('btn_check');
        //     $('.control_btn').eq(index).addClass('btn_check');
        // });
        console.log('left : ' + $('.slider_panel').css('left'));
        $('.control_btn').removeClass('btn_check');
        $('.control_btn').eq(idx).addClass('btn_check');
        $('.leftBtn','.rightBtn').show();
    }
    //aniSlider(2);
    //setInterval(aniSlider,1000);

    $('.leftBtn').on('click',function(){
        index--;
        if(index<0){
            index=2;
        }
        aniSlider(index);

        // $('.slider_panel').animate({marginLeft:"+=1000px"},300,'swing',function(){
        //     $('.slider_panel>li:last').prependTo('.slider_panel');
        //     $(this).css('margin-left','-1000px')
        // });
    });
    $('.rightBtn').on('click',function(){
        index++;
        if(index>2){
            index=0;
        }
        aniSlider(index);
        // $('.slider_panel').animate({marginLeft:"-=1000px"},300,'swing',function(){
        //     $('.slider_panel>li:first').appendTo('.slider_panel');
        //     $(this).css('margin-left','-1000px')
        // });
    });

    $('.control_btn').on('click',function(){
        index = parseInt($(this).data('index'));
        aniSlider(index);
    });

    setInterval(function(){
        index = (index +1) % $('.control_btn').length;
        aniSlider(index);
    },3000);
    aniSlider(0);
    $('.control_panel').css('margin-left', `-${$('.control_panel').css("width")}px`)
    $('.control_panel').css('margin-left', '-'+$('.control_panel').width()/2+'px' );
});