
 //* Created by mymy on 2018/3/30./*
$(function(){
  $.ajax({
    type:'get',
    url:'http://mmb.ittun.com/api/getcategorytitle',
    dataType:'json',
    success:function(info){
      //console.log(info.result);
      $('.category').html(template('temp',info));

      var $lis=$('.category').children();

      $lis.on('click',function(){
        var id = $(this).data("id");
          console.log(id);
        var than=$(this);


          $.ajax({
            type:'get',
            url:'http://mmb.ittun.com/api/getcategory',
            dataType:'json',
            data:{titleid:id},
            success:function(data){
              console.log(data.result);

              than.find('.divlis').html(template('emp',data));
              than.find('.divlis').toggleClass('hidden');

              var $uli=$('.divlis').children();
              //console.log($uli);
              $uli.on("click",function(){
                var id=$(this).data("Id");
                console.log("id");
              })
            }
          })


      })
    },

  })

})
