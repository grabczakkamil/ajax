

window.addEventListener('scroll', function(){
    'use strict';
    
//    pobieram do zmiennej element html
    var doc = document.documentElement;
//    pobieram wysokość elementu html
    var docHeight = doc.offsetHeight;
    
//    pobieram odległość bieżącej pozycji okna względem początku dokumentu
    var top_ = doc.scrollTop;
    
//    pobieram wysokość okna przeglądarki
    
    var windowHeight = window.innerHeight;
    
    
//obliczam bieżące położenie okna przeglądarki
    var topOffset = top_ + windowHeight;
    
//    jeżeli bieżące położenie okna przeglądarki == wysokość całego dokumentu, wykonuję zapytanie ajax i dostawiam na końcu listy nowe dane
    if(topOffset == docHeight) {
        
//        zapytanie ajax
      $.getJSON('https://jsonplaceholder.typicode.com/users', function(data){
          var newListElement = '';
            data.forEach(function(elem, ind) {
          newListElement += '<div class="my-item">';
                newListElement += '<div class="my_id">' + elem.id + '</div>';
                newListElement += '<div class="my_name">' + elem.name + '</div>';
                newListElement += '<div class="my_url">' + elem.website + '</div>';
            newListElement += '</div>';
                
            });
          document.getElementById('my_list').insertAdjacentHTML('beforeend', newListElement);
      }); 
    }
});