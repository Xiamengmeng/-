
/**
 * Created by hu on 2018/3/31.
 */
$(function(){
//获取url中的参数
  function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
  }
  var id=getUrlParam("id");
  console.log(id);
  $.ajax({
    url:'http://mmb.ittun.com/api/getcategorybyid',
    dataType:'json',
    data:{categoryid: id},
    success:function(info){
//console.log(info);
      var category=info.result[0].category;
      console.log(category);
      $('.nav_m').append("<li><a href='#'>"+category+"></a></li>");

//var total;
//var size;
//var len;
//渲染页面
      var len="";
      function render(num){

        $.ajax({
          url:'http://mmb.ittun.com/api/getproductlist',
          data:{
            categoryid:id,
            pageid:num||1
          },
          success:function(info){
//console.log(info);

            var total=info.totalCount;//数据总量
            var size=info.pagesize;//一页的数据
            len=Math.ceil(total/size);
            var str;
            for(var i=0;i<len;i++){
              str+="<option value="+(i+1)+">"+(i+1)+"/<span>"+ len+"</span></option>";
            }
            $('.pagenum').html(str);
//$('option:nth-child('+num+')').prop("selected",true);
            $('.pagenum').children().eq(num-1).prop('selected',true);


            $('.items').html(template('productlist',info));//渲染数据

          }

        });

      }

//渲染
      render();

//分页
//点击事件
//上一页
      var num=1;
      $('.prev').on('click',function(){
        if(num>1){
          num--
        }
        render(num)
      });;

//下一页
      $('.next').on('click',function(){

        if(num<len){
          num++;
        }
        render(num);
      });

//中间
      $('.pagenum').on("change",function(){
        var page=$(this).val();
        console.log(page);
        render(page);
        num=page;
      })

    }
  })
})

