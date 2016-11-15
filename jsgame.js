/**
 * Created by morgan.kennedy433 on 11/1/16.
 */


var colors = ["BLUE", "CYAN", "GOLD", "GRAY", "GREEN", "MAGENTA", "ORANGE", "RED", "WHITE", "YELLOW"];
var random = Math.floor(Math.random() * 9);
var randcolor = colors [random];
var clicks = 0;


function game () {

    var guess = document.getElementById('guess').value.toUpperCase();

    clicks += 1;
    document.getElementById("button").value = clicks;


    try {
       /* if(colors.indexOf([guess]) == -1) {
            throw "guess";
        } */


        if (guess == randcolor) {
            alert("Congratulations! You have guessed the color!" +
                " It took you " + clicks + " guesses to finish the game!");
            document.body.style.backgroundColor = randcolor;

        }
        else if (guess > randcolor) {
            alert("Your guess is alphabetically lower than the color chosen.");
        }

        else if (guess < randcolor) {
            alert("Your guess is alphabetically higher than the color chosen.");

        }

    }

    catch (err) {
            alert ( "This color is not an option! Please choose a valid color.");
    }

}



