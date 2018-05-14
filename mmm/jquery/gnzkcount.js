/**
 * Created by mymy on 2018/4/1.
 */
$(function(){

  $.ajax({
    type: 'get',
    url: 'http://mmb.ittun.com/api/getinlanddiscount',
    dataType: 'json',
    success: function (info) {
      console.log(info.result);
      $('.liscount').html(template('gnzkcount', info));
    }
  });
})