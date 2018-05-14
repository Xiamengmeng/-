/**
 * Created by mymy on 2018/4/2.
 */


$(function(){
  $.ajax({
    type:'get',
    url:'http://mmb.ittun.com/api/getcoupon',
    dataType:'json',
    success:function(info){
      console.log(info);
      $('.getpon').html(template('coupon',info));

      //$('.pro').append("<li><a href='#'>"+brandName+"></a></li>");

    }
  })
})