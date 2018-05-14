/**
 * Created by mymy on 2018/3/31.
 */

  $(function(){

    //获取到id
    //var query=location.search.substring(1);//获取查询串
    //console.log(query);
    //var pairs=query.split("&");//在逗号处断开
    //for(var i=0;i<pairs.length;i++) {
    //  var pos = pairs[i].indexOf('=');//查找name=value
    //  if (pos == -1)
    //    continue;//如果没有找到就跳过
    //  var argname = pairs[i].substring(0, pos);//提取name
    //
    //
    //  var value = pairs[i].substring(pos + 1);//提取value
    //
      //console.log("value=" + value);
    //}


    function GetQueryString(name)
    {
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if(r!=null)return  decodeURI(r[2]); return null;
    }

    var value=GetQueryString("id");

    console.log("id="+value);
    var brandName=GetQueryString("name");

    //URLDecoder.decode("brandName","UTF-8");
    console.log("brandName="+brandName);


    $.ajax({
      type:'get',
      url:'http://mmb.ittun.com/api/getproduct',
      dataType:'json',
      data:{productid:value || 1},
      success:function(info){
        console.log(info);
        $('.bijia_product').html(template('temper',info));

        $('.pro').append("<li><a href='#'>"+brandName+"></a></li>");

      }
    })


    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getproductcom',
      dataType:'json',
      data:{productid:value || 1},
      success:function(info){
        console.log(info.result);
        $('.com_list').html(template('comment',info));

      }
    })

  })
