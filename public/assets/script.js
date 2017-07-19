var s = Snap("#svg");
var title = s.text(250,50,"Projects");
var circle1 = s.circle(100,300,30);
var circle2 = s.circle(250,300,30);
var circle3 = s.circle(400,300,30);
var circle4 = s.circle(550,300,30);
var line1 = s.line(135,300,215,300);
var line2 = s.line(285,300,365,300);
var line3 = s.line(435,300,515,300);
line1.attr({
  stroke:"#C0C0C0",
  strokeWidth: 2
});
line2.attr({
  stroke:"#C0C0C0",
  strokeWidth: 2
});
line3.attr({
  stroke:"#C0C0C0",
  strokeWidth: 2
});
var circles = s.group(circle1,circle2,circle3,circle4);
circles.attr({
  fill:"#C0C0C0"
});
circle1.mouseover(()=>{
  circle1.animate({
    r:50
  },500);
  circle1.attr({fill:"#2ed17c"});
  line1.animate({transform:'r50'},1000);
});
circle1.mouseout(()=>{
  circle1.animate({r:30},500);
  circle1.attr({fill:"#C0C0C0"});
  line1.animate({transform:'r0'},1000);
});
circle2.mouseover(()=>{
  circle2.animate({r:50},500);
  circle2.attr({fill:"#2ed17c"});
  line1.animate({transform:'r-50'},1000);
  line2.animate({transform:'r50'},1000);
});
circle2.mouseout(()=>{
  circle2.animate({r:30},500);
  circle2.attr({fill:"#C0C0C0"});
  line1.animate({transform:'r0'},1000);
  line2.animate({transform:'r0'},1000);
});
circle3.mouseover(()=>{
  circle3.animate({r:50},500);
  circle3.attr({fill:"#2ed17c"});
  line2.animate({transform:'r-50'},1000);
  line3.animate({transform:'r50'},1000);
});
circle3.mouseout(()=>{
  circle3.animate({r:30},500);
  circle3.attr({fill:"#C0C0C0"});
  line2.animate({transform:'r0'},1000);
  line3.animate({transform:'r0'},1000);
});
circle4.mouseover(()=>{
  circle4.animate({r:50},500);
  circle4.attr({fill:"#2ed17c"});
  line3.animate({transform:'r-50'},1000);
  line4.animate({transform:'r50'},1000);
});
circle4.mouseout(()=>{
  circle4.animate({r:30},500);
  circle4.attr({fill:"#C0C0C0"});
  line3.animate({transform:'r0'},1000);
  line4.animate({transform:'r0'},1000);
});
