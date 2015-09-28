/**
 * Created by davidhoverson on 9/27/15.
 */
$(function(){
    $.ajax({
        url:"/carousel"
    }).done(function (response){
        var $activeStudent = $("<ul><li>" + response[0].Name + "</li><li>" + response[0].Description + "</li><li>" + response[0].Props + "</li></ul>");
        $("#Student1").append($activeStudent);
        for(var i = 1; i<response.length; i++){
            var $remainingStudents = $("<div class=item id=remainingStudents><ul><li>" + response[i].Name + "</li><li>" + response[i].Description + "</li><li>" + response[i].Props + "</li></ul></div>");
            $("#crazy").append($remainingStudents);
        }
    });
});