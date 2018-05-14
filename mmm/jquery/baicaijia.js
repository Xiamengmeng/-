/**
 * Created by mymy on 2018/4/1.
 */
$(function(){
  $.ajax({
    type: 'get',
    url: 'http://mmb.ittun.com/api/getbaicaijiatitle',
    dataType: 'json',
    success: function (info) {
      console.log(info.result);
      $('.navli').html(template('bcj', info));

      var $ul=$('.navli');
      $ul.children().first().addClass('active');
      var $li=$ul.find("li");
      //console.log($li);

      $li.on("click",function(){
        var id=$(this).data("id");
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        console.log(id);
        $.ajax({
          type: 'get',
          url: 'http://mmb.ittun.com/api/getbaicaijiaproduct',
          dataType: 'json',
          data:{
            titleid:id||0
          },
          success: function (info) {
            //console.log(info.result);
            $('.list').html(template('bcj-img', info));
          }
        })
      });

      var w;
      $(window).on('resize',function(){
        w=$(window).width();
        $('.bjc_big').width(w);
        //console.log($('.bjc_big').width());

      }).trigger("resize");








      var total=0;
      $li.each(function(i,v){
        total+=$(this).width();
        console.log($(this).width());

      });
      console.log(total);
      $ul.width(total);
      console.log($ul.width());

      new IScroll(".bjc_big", {
        scrollX:true,
        scrollY:false
      });


      //window.onload = function () {
      //
      //};


    }
  });



})