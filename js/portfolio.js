$(document).ready(function(){

  // Icons
  $("#about_icon").hover(function(){
    $(this).find("span").html("Meet Me");
    $(this).attr("id", "about_icon_hover");
  }, function(){
    $(this).find("span").html("About");
    $(this).attr("id", "about_icon");
  });

  $("#project_icon").hover(function(){
    $(this).find("span").html("My Work");
    $(this).attr("id", "project_icon_hover");
  }, function(){
    $(this).find("span").html("Projects");
    $(this).attr("id", "project_icon");
  });

  $("#contact_icon").hover(function(){
    $(this).find("span").html("Let's Connect");
    $(this).attr("id", "contact_icon_hover");
    $(this).find("span").css("font-size", "12px");
  }, function(){
    $(this).find("span").html("Contact");
    $(this).attr("id", "contact_icon");
    $(this).find("span").css("font-size", "inherit");
  });

  // Scrolling
  $("#icons a").click(function(){
    var $anchor = $(this);
    $("html, body").stop().animate({
        scrollTop: $($anchor.attr("href")).offset().top
    }, 2000,"easeInOutExpo");
    event.preventDefault();
  });

});