
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


    var randomNum = Math.floor((100*Math.random())+1);
    var count = 0;

    $(".new").on("click", function() {
        randomNum = Math.floor((100*Math.random())+1);;
        $(".guessBox").empty();
        $("#count").html(0);
        $("#feedback").html("Make your Guess!");
    })


    $(".button").on("click", function() {
        if (parseInt($("#userGuess").val()) === randomNum) {
              $("#feedback").html("That is correct");
         } else if (parseInt($("#userGuess").val()) < randomNum) {
              $("#feedback").html("Guess higher!");
              count++;
              $("#count").html(count);
              $("#guestList").append("<li>" + parseInt($("#userGuess").val()) + "</li>");
        } else if (parseInt($("#userGuess").val()) > randomNum) {
              $("#feedback").html("Guess lower!");
              count++;
              $("#count").html(count);
              $("#guestList").append("<li>" + parseInt($("#userGuess").val()) + "</li>");
        }

        return false;

    })


});


