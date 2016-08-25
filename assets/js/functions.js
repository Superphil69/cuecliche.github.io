$(document).ready(function() {
  $('.open_curtain').click(function(){
    $("#curtain1").animate({
      width:20}
      ,1000);
    $("#curtain2").animate({width:20},1000);
  });

 $('.close_curtain').click(function(){
   $("#curtain1").animate({width:230},1000);
   $("#curtain2").animate({width:220},1000);
 });
});
