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
    url:'http://mmb.ittun.com/api/getbrand',
    dataType:'json',
    data:{
      brandtitleid:id

    },
    success:function(info){
      console.log(info.result);
      $('.category-title').html(template('brand',info));


    }
  });
  //销量排行
  $.ajax({
    type:'get',
    url:'http://mmb.ittun.com/api/getbrandproductlist',
    dataType:'json',
    data:{
      brandtitleid:id

    },
    success:function(info){
      console.log(info.result);
      $('.list').html(template('list',info));


    }
  });

  //评论

    $.ajax({
      type:'get',
      url:'http://mmb.ittun.com/api/getproductcom',
      dataType:'json',
      data:{
        productid:id

      },
      success:function(info){
        console.log(info);
        $('.comment').html(template('comment',info));


      }
    });
})