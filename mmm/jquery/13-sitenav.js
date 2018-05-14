/**
 * Created by mymy on 2018/4/2.
 */
$(function(){
  $.ajax({
    type:'get',
    url:'http://mmb.ittun.com/api/getsitenav',
    dataType:'json',
    success:function(info){
      console.log(info.result);
      $('.sitedi').html(template('sitenav',info));


    }
  });
})