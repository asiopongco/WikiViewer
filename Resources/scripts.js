function WikiPost(title, description, link){
  this.title = title;
  this.description = description;
  this.link = link;
}
var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="

function searchFunction(input){
    $.ajax({
      url: url+input,
      method: "GET",
      dataType: "jsonp",
      success: function(data){
         for(var i=0; i<data[1].length; i++){

            var item = document.createElement('a');
            item.classList.add('post');
            item.setAttribute('href', data[3][i]);
            item.appendChild(document.createElement('li'));
            item.appendChild(document.createTextNode(data[1][i]));
            item.appendChild(document.createElement('br'));
            item.appendChild(document.createElement('br'));
            item.appendChild(document.createTextNode(data[2][i]));
            document.getElementById('results').appendChild(document.createElement('br'));
            document.getElementById('results').appendChild(item);
          }
      }
    });
}


$(document).ready(function(){
  $('#search').keyup(function(e){
    if(e.keyCode == 13){
      var userInput = document.getElementById('search').value;
      var parent = document.getElementById('results');
      var child = document.getElementsByTagName('li');
      while(parent.firstChild){
        parent.removeChild(parent.firstChild);
      }
      searchFunction(userInput);
    }
  });
});
