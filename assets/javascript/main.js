$(document).ready(function() {
    var currentState;

    function pickState() {
        currentState = states[Math.floor(Math.random() * states.length)];
    }
});