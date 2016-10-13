
$(document).ready(function() {
var colors = ['#E9967A', '#FF8C00', '#4682B4', '#CD853F', '#008080', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#fb9664', '#bdbb99', '#77b1a9', '#73a857'];
var quoteGen = function() {
$("#author").empty();
$("#quote").empty();

$.ajax({
   type : "GET",
   url : "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
   dataType: "json",
   beforeSend: function(xhr){xhr.setRequestHeader("X-Mashape-Authorization", "5ekS2kpDYzmshmMVxnjCTWJAbAxcp12eSCLjsnCic4npUWTOyN");},
   success : function(data) {
      $("#quote").append(data.quote);
      console.log("appended")
      $("#author").append(data.author);

   },
   error : function(data) {
     console.log("error");
   }
 });

 };


    $("#getQuote").click(function(){
      var color = Math.floor(Math.random() * colors.length);
      $("html body").animate({
        backgroundColor: colors[color]
      }, 1000);
      $(".btn").animate({
        backgroundColor: colors[color]
      }, 1000);
      quoteGen();
    });
    });
