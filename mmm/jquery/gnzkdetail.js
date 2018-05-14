/**
 * Created by mymy on 2018/4/1.
 */


$(function() {

  function GetQueryString(name)
  {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  decodeURI(r[2]); return null;
  }

  var id=GetQueryString("id");

  console.log("id="+id);



  //国内折扣的页面渲染
  $.ajax({
    type: 'get',
    url: 'http://mmb.ittun.com/api/getdiscountproduct',

    dataType: 'json',
    data:{
      productid:id||1
    },
    success: function (info) {
      console.log(info);
      $('.cu-content').html(template('gnzk', info));
    }
  });



})
