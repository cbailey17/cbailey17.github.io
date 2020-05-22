$(function(){
  $("#navigation-placeholder").load("/nav.html");
  $("#footer-placeholder").load("/footer.html");
});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

