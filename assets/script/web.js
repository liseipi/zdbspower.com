$(function () {
  $(".bstop_nav ul li").hover(function () {
    $(this).css("background", "#d8d8d8");
    $(this).find("p").show();
  }, function () {
    $(this).css("background", "#ebebeb");
    $(this).find("p").hide();
  });
})
