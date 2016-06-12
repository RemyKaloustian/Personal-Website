/**
 * Created by Rémy Kaloustian on 10/06/2016.
 */


$(document).ready(function(){


    $( "#loading_popup" ).dialog({
        autoOpen: false,
        dialogClass:"loading_popup"
    });

    $(".thumb").click(function () {
        console.log("Clicked a project ");
        $( "#loading_popup" ).dialog('open');
    });



});