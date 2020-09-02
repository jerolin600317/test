$(function () {
  $.get("nav.html", function (data) {
    $("#nav").html(data); //初始化載入top_menu
  });
  $.get("footer.html", function (data) {
    $("#footer").html(data); //初始化載入copyright
  });
});

$(document).ready(function () {
  $("body").scroll(function () {
    if ($("body").scrollTop() > 52) {
      $(".logo").addClass("logo_m"); //增加css樣式
    } else {
      $(".logo").removeClass("logo_m"); //刪除樣式
    }
  });
});
$(window).ready(function () { //偵測有無卷軸
  var body_x = $("body").width();
  var content_x = $(".content").width();
	//alert(content_x);
  if ((body_x - content_x) > 1) {
    $("#nav").css("margin-right", "16px"); //增加css樣式	
  } else {
    $("#nav").css("margin-right", "0px"); //增加css樣式
  }

});
$(document).ready(function () { //控制輪播時間10秒及滑鼠移上停止
  $("#game_features").carousel({
    interval: 10000,
    pause: "hover"
  });
});

$(function () { //外掛hammer.min.js讓輪播支援觸控
  var myElement = document.getElementById('game_features')
  var hm = new Hammer(myElement);
  hm.on("swipeleft", function () {
    $('#game_features').carousel('next')
  })
  hm.on("swiperight", function () {
    $('#game_features').carousel('prev')
  })
});
//往上的按鈕
$(function(){
			var btn_top = $('.btn_top');
            btn_top.click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 600);
                return false;
            });

	
});