/**
 * Created by mymy on 2018/4/2.
 */
$(function(){
  $.ajax({
    type:'get',
    url:'http://mmb.ittun.com/api/getbrandtitle',
    dataType:'json',
    success:function(info){
      console.log(info.result);
      $('.divlis').html(template('title',info));


    }
  });
})