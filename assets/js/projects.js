/**
 * Created by Rémy Kaloustian on 10/06/2016.
 */


$(document).ready(function(){


    $("#details_popup").css("display", "none");


    $(".thumb").click(function () {

        $("#popup").css("backgroundColor", "#e91e63");
        $("#loading_popup").css("display", "block");
        $("#details_popup").css("display", "none");



        $("#project_title").text($(this).data("title"));
        $("#project_role").text($(this).data("role"));
        $("#project_skills").text($(this).data("skills"));
        $("#project_review").text($(this).data("review"));

        if($(this).data("more").length >0)
        {
            $("#project_link").text($(this).data("more"));
            $("#project_link").attr("href", $(this).data("link"));

        }


        setTimeout(function(){
            $("#loading_popup").css("display", "none");
            $("#popup").css("backgroundColor", "#f5f5f5");

            $("#details_popup").css("display", "block");

        }, 2000);




    });



});