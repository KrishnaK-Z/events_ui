
var item = document.getElementById('item');
var ul = document.getElementById('to-do-list');
var addbtn = document.getElementById('addbtn');
var error = document.getElementById('error');
var listArray = localStorage.getItem('lists') ?
                JSON.parse(localStorage.getItem('lists')) : [];
var editbtn = document.getElementById('editbtn');
var deletebtn = document.getElementById('deletebtn');


var constructli = function( text )
{
  var li = document.createElement('li');
  var span = document.createElement('span');
  span.innerHTML = text;
  li.appendChild(span);
  var deletebtn = document.createElement('span');
  deletebtn.setAttribute("data-type", "delete");
  deletebtn.id = 'deletebtn';
  deletebtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  li.appendChild(deletebtn);
  ul.appendChild(li);
}

listArray.forEach( function( value ){
  constructli( value );
} );

var main = document.getElementsByClassName("container");
  main[0].addEventListener('click', function(event){
  var op = event.target.parentNode.getAttribute('data-type');
  console.log(op);
  switch (op) {

    case "add":
            event.preventDefault();
            if(item.value === '')
            {
              if(error.childNodes[0])
                error.removeChild(error.childNodes[0]);
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
    break;

    case "delete":
            var target = event.target.parentNode;
            var liParent = target.parentNode;
            var ul = liParent.parentNode;
            ul.removeChild(liParent);
            var deleteitem = liParent.childNodes[1];
            var index = listArray.indexOf(deleteitem.innerText);
            listArray.splice(index,1);
            localStorage.setItem('lists', JSON.stringify(listArray));
      break;

    default:

  }

});
