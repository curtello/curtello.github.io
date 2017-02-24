$(document).ready(function () {
  $("body").addClass("hi-backgrd");
  $("div#landing").show();
  $("button.buttons").show();
  $("button#noSkip").click(function () {
    $("div#landing").fadeOut(2000);
    $("div#hi").delay(3000).fadeIn(2000);
    $("div#hi").fadeOut(2000);
    $("div#time").delay(8000).fadeIn(2000);
    $("div#time").fadeOut(2000);
    $("div#begin").delay(13000).fadeIn(2000);
    $("div#begin").fadeOut(2000);
    $("div#intro").delay(18000).fadeIn(2000);
    $("p#intro-cont").delay(21000).fadeIn(2000);
    $("div#intro").delay(4000).fadeOut(2000);
    $("div#intro-story").delay(29000).fadeIn(2000);
    $("div#intro-story").fadeOut(2000);
    $("div#intro-story1").delay(34000).fadeIn(2000);
    $("div#intro-story1").fadeOut(2000);
    $("div#intro-story2").delay(39000).fadeIn(2000);
    $("div#intro-story2").delay(2000).fadeOut(2000);
    $("div#intro-story3").delay(46000).fadeIn(2000);
    $("div#intro-story3").fadeOut(2000);
    $("div#welcome").delay(51000).fadeIn(2000);
    // $("div#welcome").fadeOut(2000);
  });
});
