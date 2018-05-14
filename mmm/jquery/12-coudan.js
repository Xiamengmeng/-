/**
 * Created by mymy on 2018/4/2.
 */
$(function(){

  var cityid;
  var areaid;
  //城市渲染
  $.ajax({
    type:'get',
    url:'http://mmb.ittun.com/api/getgsshop',
    dataType:'json',
    success:function(info){
      console.log(info);
      $('.city-modalul').html(template('coudan',info));
      var $lis=$('.city-modalul').children();
      console.log($lis);

      $lis.on("click",function(){
        cityid=$(this).data("cityid");
        console.log("cityid"+cityid);
        getId(cityid,areaid);
      })
    }
  });

    //渲染区域
    $.ajax({
      type:'get',
      url:' http://mmb.ittun.com/api/getgsshoparea',
      dataType:'json',
      success:function(info){
        console.log(info.result);
        $('.area-modalul').html(template('modalul',info));
        var $li=$('.area-modalul').children();
        $li.on('click',function(){
          areaid=$(this).data("areaid")
          console.log(areaid);
          getId(cityid,areaid)
        })
      }
    });


  $('.city_nav .on1').on('click',function(){
    console.log('jj');

    if($('#city').css("display")=="none"){
      $('#city').css("display","block");
    }else{
      $('#city').css("display","none");
    }
  })

  $('.city_nav .on2').on('click',function(){
    console.log('jj');


    if($('#area').css("display")=="none"){
      $('#area').css("display","block");
    }else{
      $('#area').css("display","none");
    }
  })


  function getId(cityid,areaid){
    $.ajax({
      type:'get',
      url:' http://mmb.ittun.com/api/getgsproduct',
      dataType:'json',
      data:{
        shopid :cityid||0,
        areaid :areaid||0

      },
      success:function(info){
        console.log(info.result);
        $('.mainul').html(template('mainul',info));


      }
    });
  }

  getId(cityid,areaid);

})