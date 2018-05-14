/**
 * Created by mymy on 2018/4/2.
 */
$(function(){

  function GetQueryString(name)
  {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  decodeURI(r[2]); return null;
  }

  var id=GetQueryString("id");

  console.log("id="+id);

  $.ajax({
    type:'get',
    url:'http://mmb.ittun.com/api/getcouponproduct',
    dataType:'json',
    data:{couponid:id},
    success:function(info){
      console.log(info);
      $('.list').html(template('conproduct',info));

      //$('.pro').append("<li><a href='#'>"+brandName+"></a></li>");

    }
  })
})