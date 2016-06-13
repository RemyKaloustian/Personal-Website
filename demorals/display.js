/**
 * Created by Rémy Kaloustian on 13/06/2016.
 */
$(document).ready(function(){


    RemoveDivs();

    $('a').click(function()
    {
        RemoveDivs();
        $("#" + $(this).data("div")).css("display", "block");
    })




});

function RemoveDivs()
{
    $("#projects_i").css("display","none");
    $("#enterprise").css("display","none");
    $("#english").css("display","none");

}
