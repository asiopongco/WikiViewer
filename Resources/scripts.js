function WikiPost(title, description, link){
  this.title = title;
  this.description = description;
  this.link = link;
}
var userInput = "Naruto";
var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="

function searchFunction(){
    $.ajax({
      url: url+userInput,
      method: "GET",
      dataType: "jsonp",
      success: function(data){
        var list = document.createElement('ul');
         for(var i=0; i<data[1].length; i++){
            var item = document.createElement('li');
            item.appendChild(document.createTextNode(data[1][i]));
            item.appendChild(document.createElement('br'));
            item.appendChild(document.createTextNode(data[2][i]));
            item.appendChild(document.createElement('br'));
            item.appendChild(document.createTextNode(data[3][i]));
            document.getElementById('results').appendChild(item);
          }
      }
    });
}

$(document).ready(function(){
searchFunction();
});
