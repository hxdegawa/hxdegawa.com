$(function(){
  setTimeout(function(){
    $(".logo-plain").css("opacity", "1");
    setTimeout(function(){
      $(".logo-plain, .logo-animate").css("top", "-10%");
      setTimeout(function(){
        $(".animation-wrapper").addClass("removed");
      }, 1500);
    }, 500);
  }, 2000);
});