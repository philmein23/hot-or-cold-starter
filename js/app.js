
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

        var userGuessNum = $("#userGuess").val();

        if (parseInt(userGuessNum) === randomNum) {
              $("#feedback").html("That is correct");
         } else if (parseInt(userGuessNum) < randomNum && randomNum > 30) {
              $("#feedback").html("Guess higher!");
              count++;
              $("#count").html(count);
              $("#userGuess").val(' ');
              $("#guessList").append("<li>" + userGuessNum + "</li>");
        } else if (parseInt(userGuessNum) > randomNum) {
              $("#feedback").html("Guess lower!");
              count++;
              $("#count").html(count);
              $("#userGuess").val(' ');
              $("#guessList").append("<li>" + userGuessNum + "</li>");
        }

        return false;

    })


});


