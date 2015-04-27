/**
 * Created by aaronsawyer on 4/25/15.
 */

var nameArray = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function clearTeams(){
    $("#team0").empty();
    $("#team1").empty();
    $("#team2").empty();
    $("#team3").empty();
    $("#team4").empty();
    $("#team5").empty();
    $("#team6").empty();
    $("#team7").empty();
    $("#team8").empty();
    $("#team9").empty();
}

var count = 0;
var teamSize = 4;

$(document).ready(function () {
    $("#shuffleButton").on('click', function(){

        //HAPPENS RIGHT HERE, Hint for Steve: It has to do with the fact we are presetting teamSize.

        count = 0;
        nameArray = shuffle(nameArray);
        clearTeams();

        for(var i = 0; i < nameArray.length; i++){
            $("#team" + count).append("<p>" + nameArray[i] + "</p>").hide().fadeIn(500);
            count++;
            if(count == teamSize){
                count = 0;
            }
        }

    });

    $(".numberButton").on('click', function(){
        teamSize = parseInt($(this).data("teamcount"));
        console.log(teamSize);
    });
});

