'use strict';
$(function () {



    $("#get").click(function () {


    $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/', function (data) {


            
        var str = "UserId = " + data.userId + "; " + "userName = " + data.userName + "; " + "userURL = " + data.userURL;
            $("#output").html(str);


        });
    });


});

//$(function(){
//    
//})