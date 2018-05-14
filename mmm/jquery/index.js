/**
 * Created by mymy on 2018/3/30.
 */
$(function(){
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getindexmenu',
    dataType:'json',
    success:function(info){
      console.log(info.result);
      $('.wrap').html(template('tmp-id',info));
      $('.wrap li').each(function(i,v){
        console.log(v);
        $li=$(".wrap").children().eq(7);
        //console.log($li.html());

        if(i>7){
          $(v).addClass("hidden");
        }
        $li.on("click",function(){
          console.log("kk");
          if(i>7){
            $(v).toggleClass("hidden");
          }
        })


      })

    }
  })
})

$(function(){
  $.ajax({
    type:'get',
    url:'http://mmb.ittun.com/api/getmoneyctrl',
    dataType:'json',
    success:function(data){
      console.log(data.result);
      $('.goods').html(template('tmp',{data:data.result}));

    }
  })
})
