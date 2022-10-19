
$(document).ready(function() {

    /**
     * Shows a message on screen telling if it is Sunday or not.
     * 
     * When it is Sunday, font color is green, otherwise it is blue.
     * 
     * @listens For when the page has loaded.
     */
    function tell_if_sunday() {
        const current_date = new Date();
        if (current_date.getDay() == 0) {
            $("#message").html("It is Sunday!");
            $("#message").css("color", "green");
        } 
    }

    tell_if_sunday();
});