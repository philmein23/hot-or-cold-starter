
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
    var prevGuess = [];

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

          } else if (prevGuess.length === 0 && userGuessNum !== randomNum) {

            prevGuess.push(parseInt(userGuessNum));
            count++;
            $("#count").html(count);
            $("#userGuess").val(' ');
            $("#guessList").append("<li>" + userGuessNum + "</li>");
        }



        for (var i = 1; i <= prevGuess.length; i++) {

           if (parseInt(userGuessNum) < parseInt(prevGuess[i - 1]) && parseInt(userGuessNum) < randomNum) {
                  $("#feedback").html("Less than your previous guess");
                  count++;
                  $("#count").html(count);
                  $("#userGuess").val(' ');
                  $("#guessList").append("<li>" + userGuessNum + "</li>");
                  prevGuess += prevGuess[i];


            } else if (parseInt(userGuessNum) < parseInt(prevGuess[i - 1])&& parseInt(userGuessNum) > randomNum) {
                  $("#feedback").html("Less than your previous guess");
                  count++;
                  $("#count").html(count);
                  $("#userGuess").val(' ');
                  $("#guessList").append("<li>" + userGuessNum + "</li>");
                  prevGuess += prevGuess[i];


            } else if (parseInt(userGuessNum) > parseInt(prevGuess[i - 1]) && parseInt(userGuessNum) < randomNum) {
                  $("#feedback").html("Higher than your previous guess");
                  count++;
                  $("#count").html(count);
                  $("#userGuess").val(' ');
                  $("#guessList").append("<li>" + userGuessNum + "</li>");
                  prevGuess += prevGuess[i];


            } else if (parseInt(userGuessNum) > parseInt(prevGuess[i - 1]) && parseInt(userGuessNum) > randomNum) {
                  $("#feedback").html("Higher than your previous guess");
                  count++;
                  $("#count").html(count);
                  $("#userGuess").val(' ');
                  $("#guessList").append("<li>" + userGuessNum + "</li>");
                  prevGuess += prevGuess[i];


            }
        }

        return false;

        /*if (parseInt(userGuessNum) === randomNum) {
              $("#feedback").html("That is correct");
            } else if (parseInt(userGuessNum) < randomNum) {
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

        return false;*/

    })


});


