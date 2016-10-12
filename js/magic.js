$(document).ready(function() {

    $("#getQuote").on("click", function(){
      $.getJSON("http://api.forismatic.com/api/1.0/method=getQuote&format=json&lang=en", function(json) {
        $(".id").html(JSON.stringify(json));
      });
    });
  });
