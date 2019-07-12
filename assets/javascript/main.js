$(document).ready(function() {
    var currentState;
    var questionCapital;

    function pickState() {
        currentState = states[Math.floor(Math.random() * states.length)];

        if (flip <= 0.49) {
            questionCapital = currentState.capital;
        } else {
            questionCapital = states[Math.floor(Math.random() * states.length)].capital;
        }
    }

    function displayQuestion(){
        $('#question').text('is ' + questionCapital + ' the capital for' + currentState.state);
    }
});