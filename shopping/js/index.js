$(function(){

    $(".demo").fullpage({
      verticalCentered:false,
      navigation:true,


  afterLoad:function(anchorLink, index){
          if(index < 8){
            //让继续向下显示出来
            $(".next").fadeIn(500);
          }
        if(index===2){
        //  让搜索移动到中间位置
          $(".two-search-wrapper").animate({marginLeft:0},500);
          //延迟500ms,让搜索字沙发出现,假盒子出现
          $(".two-search-words").delay(500).fadeIn(500,function(){
            $(".two-search-wrapper").hide();
            $(".two-search-copy").show();
          });
        //  延迟1000ms 让搜索框移动到右上角
          $(".two-search-copy").delay(1000).animate({
            marginLeft:200,
            width:150,
            bottom:450
          },500);
          $(".two-goods").delay(1500).fadeIn(500);

        }
        if(index===5){
          //手先出来
          $(".five-hand").animate({
            bottom:0
          },500);
            //$(".five-hand").hide();
          //延迟500后，点击鼠标
          $(".five-mouse-a").delay(500).fadeIn(500);
          //延迟一秒之后沙发从上面先显示后掉下来
          $(".five-sofa-rotate").delay(1000).show().animate({
            bottom: 100
          }, 500);
          $(".five-order").delay(1500).show().animate({
            bottom:370
          },500,function(){
            $(".five-words").fadeIn(500);
          });




        }
        if(index===7){
          $(".seven-star").css("left", 0);
          $(".seven-good").delay(1000).fadeIn(500);

        }

      },
      onLeave:function(index, nextIndex, direction) {
        $(".next").fadeOut(500);
        var screenHeight = $(window).height();
        var screenWidth = $(window).width();
        if (index === 2 && nextIndex === 3) {
          $(".two-goods").show();
          $(".two-mask").show();
          $(".two-only-sofa").show().animate({
            bottom: -screenHeight + 220,
            width: 210,
            height: 210,
            marginLeft: -125
          }, 1000);
          $(".three-btn-a, .three-sel-a").delay(1000).fadeIn(500);


        }
        if (index === 3 && nextIndex === 4) {
          $(".two-only-sofa").hide();
          $(".three-sofa-rotate").show().animate({
            bottom: -screenHeight + 220,
            marginLeft: -200
          }, 1000, function () {
            $(".three-sofa-rotate").hide();
            $(".four-sofa-rotate").show();
          });
          //延迟1000之后，小车往前跑
          $(".four-car-wrapper").delay(1000).animate({
            left: screenWidth
          }, 2000, "easeInBack");

          $(".four-words-a").delay(3000).fadeIn(500);
          $(".four-address-card").delay(3500).fadeIn(500);
          $(".four-address-txt").delay(4000).fadeIn(500);


        }
        if (index === 5 && nextIndex === 6) {

          //让沙发跨屏, 保证沙发掉到第六屏的时间和箱子的时间同步
          $(".five-sofa-rotate").stop(true).animate({
            bottom: -screenHeight + 460,
            width: 50,
            height: 50,
            marginLeft: -220
          }, 1000, function () {
            $(".five-sofa-rotate").hide();
          });
          $(".six-box").animate({
            marginLeft:-220

          },800);
          $(".six-box").delay(200).animate({
            bottom:30
          });
          $(".six-address").delay(1000).fadeIn(1000);

          $(".page6").delay(2000).animate({
            backgroundPositionX: "100%"

          },2000,function(){
            $(".six-address").hide();
            $(".six-man").fadeIn()
                .animate({bottom:111},500).animate({right:450},500);
            $(".six-getProduct").delay(1000).fadeIn(500);
            $(".six-door").delay(1500).fadeIn(1000);
            $(".six-women").delay(2500).fadeIn(1000);
            $(".six-words").delay(3500).fadeIn(500);
          })


        }
      }
    });
  $(".page8").on("mouseover",function(e){
    var x= e.clientX-55;
    var y= e.clientY+10;
    if(y < $(window).height() - $(".eight-hand").height()) {
      y = $(window).height() - $(".eight-hand").height();
    }
    $(".eight-hand").css({
      left:x,
      top:y
    })

  });

  //给next注册一个点击事件
  $(".next").on("click", function () {
    $.fn.fullpage.moveSectionDown();
  })

});