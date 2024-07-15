function setBtnScroll(){
    let btnUp =  document.querySelector('#btn_scroll_up');
    let btnDown = document.querySelector('#btn_scroll_down');
    btnUp.addEventListener('click',()=>{movePageUpDown(true); return false;});
    btnDown.addEventListener('click',()=>{movePageUpDown(false); return false;});
}

function movePageUpDown(isUp){
    isUp ? window.scroll(0,0) : window.scroll(0,999999999);
    return false;
}

$(function(){
    includeHTML('footer_window','btn_scroll.html',setBtnScroll);
});

