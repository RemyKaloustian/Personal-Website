/**
 * Created by R�my Kaloustian on 10/06/2016.
 */


$(document).ready(function(){


    $("#details_popup").css("display", "none");


    $(".thumb").click(function () {

        $("#loading_popup").css("display", "block");
        $("#details_popup").css("display", "none");

        setTimeout(function(){
            $("#loading_popup").css("display", "none");
           $("#details_popup").css("display", "block");

        }, 2000);
    });



});