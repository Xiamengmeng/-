/**
 * Created by mymy on 2018/4/3.
 */
$(function(){
  $.ajax({
    url:'http://mmb.ittun.com/api/getinlanddiscount',
    dataType:'json',
    success:function(info){
      console.log(info);
      $('.dis_item ul').html(template('insland',info));
    }

  })
})