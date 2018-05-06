'use strict';
window.onscroll = function() {
  var d = document.documentElement;
  var offset = d.scrollTop + window.innerHeight;
  var height = d.offsetHeight;

  if (offset === height) {
      
     function pobierzDane() {
    ajax("GET", 'https://jsonplaceholder.typicode.com/users');
    
}

function ajax(method, url) {  
    
    var httpReq = new XMLHttpRequest();
    
    httpReq.open(method, url);
    
    httpReq.addEventListener('readystatechange', function() {
        if (httpReq.readyState == 4) {
            if(httpReq.status == 200) {
                var data = httpReq.responseText;
                output.innerHTML = data;
            }
        }
    });
    httpReq.send();
  }
  }
};