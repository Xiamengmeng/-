/**
 * Created by mymy on 2018/4/1.
 */
$(function(){

    $.ajax({
    type:'get',
    url:'http://mmb.ittun.com/api/getmoneyctrl',
    dataType:'json',
    success:function(info){
      console.log(info.result);
      $('.list').html(template('tmped',info));
    }
  })





  //分页部分
  var pages;
  function render(num){

    $.ajax({
      type:'get',
      url:'http://mmb.ittun.com/api/getmoneyctrl',
      dataType:'json',
      data:{
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
        $('.list').html(template('tmped',info));


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
