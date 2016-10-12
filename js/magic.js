
$(document).ready(function() {
var colors = ['#E9967A', '#FF8C00', '#4682B4', '#CD853F', '#008080', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#fb9664', '#bdbb99', '#77b1a9', '#73a857'];


    $("#getQuote").on("click", function(){
      $.getJSON("http://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
        $(".id").html(JSON.stringify(json));
      });
    });

    $("#getQuote").click(function(){
      var color = Math.floor(Math.random() * colors.length);
      $("html body").animate({
        backgroundColor: colors[color]
      }, 1000);
      $(".btn").animate({
        backgroundColor: colors[color]
      }, 1000);
    });
  });
