// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main');


$(document).ready(initialize);

function initialize(){
    console.log("APP: Initializing app...");

    $("#monster-list").hide();
    $("#btn-toggle-options").on("click",toggleOptions);
}

function toggleOptions(){
    $("#monster-list").toggle();
}
}