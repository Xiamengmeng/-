/**
 * Created by mymy on 2018/3/31.
 */


$(function(){

  var query=location.search.substring(1);//获取查询串
  console.log(query);
  var pairs=query.split("&");//在逗号处断开
  for(var i=0;i<pairs.length;i++)
  {
    var pos=pairs[i].indexOf('=');//查找name=value
    if(pos==-1)
      continue;//如果没有找到就跳过
    var argname=pairs[i].substring(0,pos);//提取name
    var value=pairs[i].substring(pos+1);//提取value
    //console.log("value="+value);
  }

  //动态渲染分类栏
  $.ajax({
    type:'get',
    url:'http://mmb.ittun.com/api/getcategorybyid',
    dataType:'json',
    data:{categoryid:value},
    success:function(info){
      console.log(info.result);
      var category=info.result[0].category;
      console.log(category);
      $('.pro').append("<li><a href='#'>"+category+"></a></li>");

      $('.main').on("click",function(){
        window.location.href="index.html"
      })
      $('.all').on("click",function(){
        window.location.href="categroy.html"
      })
    }
  })

  //渲染商品页面


  $.ajax({
    type:'get',
    url:'http://mmb.ittun.com/api/getproductlist',
    dataType:'json',
    data:{categoryid:value},
    success:function(info){
      console.log(info.result);
      $('.list').html(template('tmp-id',info));
    }
  })






  //分页部分
  var pages;
  function render(num){

    $.ajax({
      type:'get',
      url:'http://mmb.ittun.com/api/getproductlist',
      dataType:'json',
      data:{
        categoryid:value,
        pageid:num||1
      },
      success:function(info) {
        //console.log(info);
        pages = Math.ceil(info.totalCount / info.pagesize);
        //console.log(pages);

        //分页渲染

        var str="";
        for (i = 0; i < pages; i++) {

          str+="<option value=" + (i + 1) + ">" + (i + 1) + "/" + pages + "</option>"


        }
        $('.selected').html(str);
        $('.selected').children().eq(num-1).prop('selected',true);
        $('.list').html(template('tmp-id',info));//渲染数据


      }

    });
  }


render();

//分页点击事件

  var num=1;

  $('.prev').on('click',function(){
    if(num>1){
      num--;
      render(num);
    }


  });

  $('.next').on('click',function(){
    if(num<pages){
      num++;
      //console.log(num);
      render(num);
    }

  });



//  中间部分

  $('.selected').on("change",function () {
    var pages=$(this).val();
    //console.log(pages);
    render(pages);
    num=pages;
    //$('.selected').children().eq(num-1).prop('selected',false);

  })

})


