/**
 * Created by Rémy Kaloustian on 09/06/2016.
 */
$(document).ready(function(){

    $("#envelop").mouseenter(function()
    {
        $("#contact_text").text("remy.kaloustian@protonmail.com");
    });

    $("#github").mouseenter(function()
    {
        $("#contact_text").text("https://github.com/RemyKaloustian");
    });

    $("#smile").mouseenter(function()
    {
        $("#contact_text").text("Be happy :)");
    });



});