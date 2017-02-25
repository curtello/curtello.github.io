$(document).ready(function () {
  $("body").addClass("hi-backgrd");
  $("div#landing").show();
  $("button.buttons").show();
  $("button#noSkip").click(function () {
    $("button#skip").hide();
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
    $("div#intro-story").delay(2000).fadeOut(2000);
    $("div#intro-story1").delay(36000).fadeIn(2000);
    $("div#intro-story1").fadeOut(2000);
    $("div#intro-story2").delay(41000).fadeIn(2000);
    $("div#intro-story2").delay(2000).fadeOut(2000);
    $("div#intro-story3").delay(48000).fadeIn(2000);
    $("div#intro-story3").fadeOut(2000);
    $("div#welcome").delay(53000).fadeIn(2000);
    $("button#enter").delay(56000).fadeIn(2000);
  });
  $("button#enter").click(function () {
    $("div#welcome").delay(3000).fadeOut(2000);
    $("body").removeClass();
    $("body").addClass("homepage");
    $("div#homepage").delay(5000).fadeIn(2000);
  });
  $("button#skip").click(function () {
    $("div#landing").delay(3000).fadeOut(2000);
    $("button#noSkip").hide();
    $("body").removeClass();
    $("body").addClass("homepage-skip");
    $("div#homepage").delay(5000).fadeIn(2000);
  });
});
