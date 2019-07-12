$(document).ready(function() {
    var currentState;

    function pickState() {
        currentState = states[Math.floor(Math.random() * states.length)];
    }
<<<<<<< HEAD
});

$("button").on("click", function (){
    if ($(this).attr("id") === "true") {
        
    }
    else if ($(this).attr("id") === "false") {

    }
})
=======


function displayQuestion(){
        $('#question').text('is ' + currentCapital + ' the capital for' + currentState)
        }
});


>>>>>>> d68aeff9b4d987dc9c2b8f76ee6ee00133eb0338
