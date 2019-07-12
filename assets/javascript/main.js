$(document).ready(function() {
    var currentState;

    function pickState() {
        currentState = states[Math.floor(Math.random() * states.length)];
    }


function displayQuestion(){
        $('#question').text('is ' + currentCapital + ' the capital for' + currentState)
        }

        $("button").on("click", function (){
            if ($(this).attr("id") === "true") {
                
            }
            else if ($(this).attr("id") === "false") {
        
            }
});


