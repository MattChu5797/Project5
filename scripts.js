$(document).ready(function(){

// console.log('hello world');
//
// $("h1").css({
//   "color":"blue",
//   "font-size": 50
// });
//
//
// var fontsize =
// $("h1").css("width");
// console.log(fontsize);
//
// $(".banana").html("<a href=''>I'm a Banana</a>");
// $(".pineapple").text("<a href=''>I'm a Pineapple</a>");
//

$("body").append("<h1 class='answer1'></h1>");
$("body").append("<h1 class='answer2'></h1>")
$("body").append("<h1 class='answer3'></h1>");
$("body").append("<h1 class='answer4'></h1>");
$("body").append("<h1 class='answer5'></h1>");
$("body").append("<h2 class='answer6'></h2>");
var bandinfo = function (){
  var venuenameanswer = prompt("What is the name of the venue?");
  var whereisitanswer = prompt("Where is the location of the performance?");
  var whenanswer = prompt("When is the performance?");
  var timeanswer = prompt("What time is the performance?");
  var costanswer = prompt("How much are tickets?");
  var bandname = prompt("Who is performing?");
  $('h1.answer1').text(venuenameanswer);
  $('h1.answer2').text(whereisitanswer);
  $('h1.answer3').text(whenanswer);
  $('h1.answer4').text(timeanswer);
  $('h1.answer5').text(costanswer);
  $('h2.answer6').text(bandname);
  $("button").remove();
}
$(".button2").click(function(){
  $(".button2").remove()
}); 
$(".buttonname").click(function(){bandinfo()
});
//
// $("body").append("<h1 class='start-buttontwo'></h1>");
//
// var myFunctiontwo = function (){
// var myAnswertwo = prompt("Whats the date of the concert?");
// $('h1.answer').text(myAnswertwo)
// $("button").remove();
// }
//
// $(".buttonwhen").click(function(){myFunctiontwo()
// });





});
