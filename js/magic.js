
$(document).ready(function() {

var colors = ['#E9967A', '#FF8C00', '#4682B4', '#CD853F', '#008080', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#fb9664', '#bdbb99', '#77b1a9', '#73a857'];
var currentQuote;
var currentAuthor;

var quoteGen = function() {
$("#author").empty();
$("#quote").empty();
console.log("err");
$.ajax({
   type : "GET",
   url : "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
   dataType: "json",
   beforeSend: function(xhr){xhr.setRequestHeader("X-Mashape-Authorization", "5ekS2kpDYzmshmMVxnjCTWJAbAxcp12eSCLjsnCic4npUWTOyN");},
   success : function(data) {
      $("#quote").append(data.quote);
      console.log("appended")
      $("#author").append(data.author);
      currentQuote = data.quote;
      currentAuthor = data.author;
      $("#tweet").attr('href','https://twitter.com/intent/tweet?hashtags=quotes&text='
       + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
   },
   error : function(data) {
     console.log("error");
   }
 });
 };

quoteGen();





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
