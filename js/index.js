$(function(){
  $(".text-highlight").hover(
    function(){
      $(".text-highlight").removeClass("hover");
      var $color = $(".text-highlight."+ $(this).attr("class").split(" ")[1]);
      $color.addClass("hover");
    },
    function(){
      $(".text-highlight").removeClass("hover");
    }
  );
})