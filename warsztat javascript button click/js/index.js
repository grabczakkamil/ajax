'use strict';
var btn = document.getElementById('get');
var output = document.getElementById('output');

function pobierzDane() {
    ajax("GET", 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/');
    
}

function ajax(method, url) {  
    
    var httpReq = new XMLHttpRequest();
    
    httpReq.open(method, url);
    
    httpReq.addEventListener('readystatechange', function(){
        if (httpReq.readyState == 4) {
            if(httpReq.status == 200) {
                var data = httpReq.responseText;
                output.innerHTML = data;
            }
        }
    });
    httpReq.send();
}
btn.addEventListener('click', pobierzDane);
