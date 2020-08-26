$(function(){
   $("#playVideo").click(function(){
	var area=['50%','480px']
	if($(window).width()<800){
		area=['80%','360px']
}
window.layer.open({
            type: 2,
            title: false,
            area: area,
            shade: 0.8,
            shadeClose: true,
            content: "images/video.mp4"
        });
        return false;

    });

    $(".closeBtn").click(function (){
        $("#videoPop").fadeOut()
    });
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