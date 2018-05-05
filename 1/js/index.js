'use strict';
function showData(arrData) {
    var html = ""; 
    arrData.forEach(function(elem, index) {
//        console.log(elem.title);
//        console.log("================");
        html += "<p>Tytuł: <strong>" + elem.title + "</strong></p>";
    });
   document.body.innerHTML = html; 
}


function ajax(method, url) {
    
    
/*tworzę obiekt XMLHttpRequest*/
    var httpReq = new XMLHttpRequest();
    
    /*otwieram połączenie*/
    
    httpReq.open(method, url);
    
    /*zdarzenie zmiany statusu połączenia*/
    
    httpReq.addEventListener('readystatechange', function(){
        
//        jeśli raedyState == 4 - dane zwrócone i gotowe do użycia
        if(httpReq.readyState == 4) {
            
//            sprawdzam kod statusu odpowiedzi - interesuje nas najbardziej 200
            
            if(httpReq.status == 200) {
                var data = httpReq.responseText;
                var jsonData = JSON.parse(data);
                showData(jsonData);
                
            }
        }
        
    });
    
    httpReq.send();
}

ajax('GET', 'https://jsonplaceholder.typicode.com/posts');