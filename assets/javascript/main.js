$(document).ready(function() {
    var currentState;
    var questionCapital;
    var wins = 0;
    var losses = 0;

    pickState();
    displayQuestion();

    function pickState() {
        currentState = states[Math.floor(Math.random() * states.length)];

        if (Math.random() <= 0.49) {
            questionCapital = currentState.capital;
        } else {
            questionCapital = states[Math.floor(Math.random() * states.length)].capital;
        }
    }

    function setStateInfo() {
        $("#state-name").text("State: " + currentState.state);
        $("#state-capital").text("Capitol: " + currentState.capital);
    }

    function setStats(status) {
        var msg1 = "Good job!";
        var msg2 = "Correct!";

        if (!status) {
            msg1 = "Nice Try!";
            msg2 = "Incorrect!";
        }

        alert(msg1 + " Try again!");
        $("#status").text(msg2);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
    }

    function displayQuestion() {
        $('#question').text('Is ' + questionCapital + ' the capitol of ' + currentState.state);
    }

    $(".btn").on("click", function () {
        var flag = currentState.capital === questionCapital;

        if (($(this).attr("id") === "true" && flag) || ($(this).attr("id") === "false" && !flag)) {
            wins++;
            setStats(true);
        } else {
            losses++;
            setStats(false);
        }

        setStateInfo();
        pickState();
        displayQuestion();
    });
});