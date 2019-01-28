
var item = document.getElementById('item');
var ul = document.getElementById('to-do-list');
var addbtn = document.getElementById('addbtn');
var error = document.getElementById('error');
var listArray = localStorage.getItem('lists') ?
                JSON.parse(localStorage.getItem('lists')) : [];

const buttons = '<span><i class="far fa-edit"></i></span><span><i class="fas fa-trash-alt"></i></span>';

var constructli = function( text )
{
  var li = document.createElement('li');
  var t = document.createTextNode(text);
  li.appendChild(t);
  ul.appendChild(li);
}

addbtn.addEventListener("click", function(event){
  event.preventDefault();
  if(item.value === '')
  {
    var t = document.createTextNode("Please Enter the list");
    error.appendChild(t);
  }
  else {
    error.removeChild(error.childNodes[0]);
    listArray.push( item.value );
    localStorage.setItem('lists', JSON.stringify(listArray));
    constructli( item.value );
    item.value = " ";
  }

  console.log(listArray);
});

listArray.forEach( function( value ){
  constructli( value );
} );
