var parent = document.getElementsByClassName('main');

var titleArray = localStorage.getItem('title') ?
                JSON.parse(localStorage.getItem('title')) : [];
var descriptionArray = localStorage.getItem('description') ?
                JSON.parse(localStorage.getItem('description')) : [];

var ul = parent[0].getElementsByTagName('ul')[0];

var textarea = parent[0].getElementsByTagName('textarea')[0];

const debounce = (func, delay) => {
  let inDebounce
  return function() {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

let deleteli;

var sideflag = 0;

var hamburger;
hamburger = document.getElementById('hamtog');
hamburger.addEventListener('click', function(event){
  var sidebar = parent[0].childNodes[3];
  if(sideflag===0)
  {
    sidebar.style.left = '0';
    sideflag = 1;
  }
  else {
    sidebar.style.left = '-100%';
    sideflag = 0;
  }
});

var emptyspan;


var constructli = function(id, title){
  var li = document.createElement('li');
  li.id = id;
  var span = document.createElement('span');
  span.innerHTML = ellipsify(title);
  li.appendChild(span);
  li.setAttribute("type", "show");
  var i = document.createElement('i');
  i.classList.add("far");
  i.classList.add("fa-arrow-alt-circle-right");
  i.setAttribute( "type", "show" );
  li.appendChild(i);
  ul.appendChild(li);
  return span;
}

var setTitle = function(el){
  emptyspan.innerHTML = ellipsify(el.value);
}

function ellipsify (str) {
    if (str.length > 18) {
        return (str.substring(0, 10) + "...");
    }
    else {
        return str;
    }
}


parent[0].addEventListener('click', function(event){
  var type = event.target.getAttribute('type');
  switch(type)
  {
    case "add":
          textarea.value="";
          textarea.focus();

          addnotes("hi first notes").then( (id) => {
              emptyspan = constructli(id,"");
              textarea.addEventListener('keyup', debounce(function() {
                descriptionArray.push(textarea.value);
                localStorage.setItem('description', JSON.stringify(descriptionArray));
                updatenotes(id, descriptionArray[descriptionArray.length-1]);
              }, 3000));
          } );

      break;

      case "show":
          let selecteslist = event.target.parentNode;
          deleteli = event.target.parentNode;
          getNotesBy(selecteslist.id).then( (desc) => {
            textarea.value = desc;
          } );
          break;
      case "delete":
          deleteli.parentNode.removeChild(deleteli);
          deletenote(deleteli.id);
      break;
  }
});



var addnotes = (text) => {
  return new Promise( (resolve, reject) => {
    fetch("http://192.168.100.162:3000/notes",{
      method: "post",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token'),
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "description": text
      })
    })
    .then(function(result){
      return result.json();
    })
    .then( (data) => {
      resolve(data.responseBody.id);
    })
  } );
};


var updatenotes = (id, text) => {
  fetch("http://192.168.100.162:3000/notes/"+id,{
    method: "put",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem('token'),
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "description": text
    })
  })
  .then( function(result){
    return result.json();
  } )
  .then( (data) => {
    console.log(data);
  } )
}

var deletenote = (id) => {
  fetch("http://192.168.100.162:3000/notes/"+id,{
    method: "delete",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem('token'),
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
  .then( function(result){
    return result.json();
  } )
  .then( (data) => {
    console.log(data);
  } )
}


var getNotesBy = (id) => {
  return new Promise( (resolve, reject) => {
    {
      fetch("http://192.168.100.162:3000/notes/"+id,{
        method: "get",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem('token'),
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      .then( function(result){
        return result.json();
      } )
      .then( (data) => {
        resolve(data.responseBody.description);
      } )
    }
  } );
}


var getAllNodes = () => {
  fetch("http://192.168.100.162:3000/notes",{
    method: "get",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem('token'),
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
  .then( function(result){
    return result.json();
  } )
  .then( (data) => {
    if(data.isSuccess === true){
      for(let i=0; i<data.responseBody.length; i++){
        constructli(data.responseBody[i].id ,data.responseBody[i].description);
      }
    }
  } )
}
