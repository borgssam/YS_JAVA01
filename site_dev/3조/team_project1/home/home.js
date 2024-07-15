jQuery(document).ready(function () {
  let x;
  let posX;
  let img = 0;
  let click = false;

  $(".img").mousedown(function (event) {
    x = event.clientX;
    click = true;
    getPos(this);
  });

  $(".img").mouseup(function (event) {
    click = false;
    getPos(this);
    if (posX >= -951) {
      resetStart("0%");
      console.log(posX);
      setTimeout(() => {
        resetEnd();
        $(".img li:last-child").prependTo(".img");
      }, 500);
    } else if (posX <= -951 && posX >= -2853) {
      resetStart("-100%");

      setTimeout(() => {
        resetEnd();
      }, 500);
    } else if (posX <= -2853 && posX >= -3804) {
      resetStart("-200%");

      setTimeout(() => {
        resetEnd();
        $(".img li:first-child").appendTo(".img");
      }, 500);
    }
    setTimeout(() => {
      console.log($(".img li:nth-child(2)").attr("class"));
      setImg();
      getImg();
    }, 500);
  });

  $(".img").mousemove(function (e) {
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    if (click) {
      let letX = posX;
      $(this).css("left", `${e.clientX - x + posX}px`);
    }
  });

  $(".con > div > p:last-child").click(function (e) {
    e.preventDefault();
    if (img == 0) {
      resetStart("-200%");
      setTimeout(() => {
        resetEnd();
        $(".img li:first-child").appendTo(".img");
        setImg();
        getImg();
      }, 500);
    }
  });

  $(".con > div > p:first-child").click(function (e) {
    e.preventDefault();
    if (img == 1) {
      resetStart("0%");
      setTimeout(() => {
        resetEnd();
        $(".img li:last-child").prependTo(".img");
        setImg();
        getImg();
      }, 500);
    }
  });

  $(".con > div > p").hover(function () {
    // over
    $(this).css("cursor", "pointer");
  });

  function getPos(get) {
    let length = $(get).css("left").length;
    return (posX = parseInt(
      $(get)
        .css("left")
        .substr(0, length - 2)
    ));
  }

  function resetEnd() {
    $(".img").removeClass("tr");
    $(".img").css("transform", "translate(0%)");
    $(".img").css("left", `-100%`);
  }

  function resetStart(string) {
    $(".img").css("left", `0`);
    $(".img").addClass("tr");
    $(".img").css("transform", `translateX(${string})`);
  }

  function setImg() {
    if (
      $(".img li:nth-child(2)").attr("class") == "img1" ||
      $(".img li:nth-child(2)").attr("class") == "img3"
    ) {
      img = 0;
    } else {
      img = 1;
    }
  }

  function getImg() {
    if (img == 0) {
      $(".con > div > p:first-child").addClass("b-white");
      $(".con > div > p:first-child").removeClass("b-gray");
      $(".con > div > p:last-child").addClass("b-gray");
      $(".con > div > p:last-child").removeClass("b-white");
    } else if (img == 1) {
      $(".con > div > p:first-child").addClass("b-gray");
      $(".con > div > p:first-child").removeClass("b-white");
      $(".con > div > p:last-child").addClass("b-white");
      $(".con > div > p:last-child").removeClass("b-gray");
    }
  }
});
