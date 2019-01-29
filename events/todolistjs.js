
var item = document.getElementById('item');
var ul = document.getElementById('to-do-list');
var addbtn = document.getElementById('addbtn');
var error = document.getElementById('error');
var listArray = localStorage.getItem('lists') ?
                JSON.parse(localStorage.getItem('lists')) : [];
var editbtn = document.getElementById('editbtn');
var deletebtn = document.getElementById('deletebtn');


const buttons = '<input type="text" name="edittext" value="" class="editon" id="edittext"/><span id="editbtn"><i class="far fa-edit"></i></span><span id="deletebtn"><i class="fas fa-trash-alt"></i></span>';

var constructli = function( text )
{
  var li = document.createElement('li');
  var span = document.createElement('span');
  span.innerHTML = text;
  li.appendChild(span);
  var deletebtn = document.createElement('span');
  deletebtn.id = 'deletebtn';
  deletebtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  li.appendChild(deletebtn);
  deletebtn.addEventListener('click', deletefunction);
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
    if(error.childNodes[0])
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


var deletefunction = function(){
  var liParent = this.parentNode;
  var ul = liParent.parentNode;
  ul.removeChild(liParent);
  var deleteitem = liParent.childNodes[1];
  var index = listArray.indexOf(deleteitem.innerText);
  listArray.splice(index,1);
  localStorage.setItem('lists', JSON.stringify(listArray));
}
