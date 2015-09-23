
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


        var userGuessNum = parseInt($("#userGuess").val());
        prevGuess.push(userGuessNum);



        if (userGuessNum === randomNum) {

            $("#feedback").html("That is correct");

        }
        else if (userGuessNum !== randomNum && prevGuess.length === 1) {

            $("#feedback").html("That is wrong");
            $("#guessList").append("<li>" + userGuessNum + "</li>");
            count++;
            $("#count").html(count);
            $("#userGuess").val(' ');

        }
        else if (prevGuess[1] > prevGuess[0] && prevGuess[1] < randomNum) {




         if (prevGuess.length > 1) {
            prevGuess.shift();
        }







        return false;

    })


});


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
