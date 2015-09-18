
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

    $(".new").on("click", function() {
        randomNum = Math.floor((100*Math.random())+1);;
        $(".guessBox").empty();
        $("#count").html(0);
        $("#feedback").html("Make your Guess!");
    })


    $(".button").on("click", function() {
        if ($("#userGuess").val() === randomNum) {
              $("#feedback").empty().append("That is correct");
         } else {
              $("#feedback").empty().append("That is wrong");
        }

    })


});


