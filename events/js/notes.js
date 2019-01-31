var parent = document.getElementsByClassName('main');

var titleArray = localStorage.getItem('title') ?
                JSON.parse(localStorage.getItem('title')) : [];
var descriptionArray = localStorage.getItem('description') ?
                JSON.parse(localStorage.getItem('description')) : [];

var ul = parent[0].getElementsByTagName('ul')[0];

// if(ul.getElementsByTagName('li').length === 0)
// console.log( $(this).find("[type='" + delete + "']")  );


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
var textarea;

var constructli = function(title){
  var li = document.createElement('li');
  var span = document.createElement('span');
  span.innerHTML = title;
  li.appendChild(span);
  li.setAttribute("type", "show");
  var i = document.createElement('i');
  i.classList.add("far");
  i.classList.add("fa-arrow-alt-circle-right");
  li.appendChild(i);
  ul.appendChild(li);
  return span;
}

var setTitle = function(el){
  emptyspan.innerHTML = ellipsify(el.value);
}

function ellipsify (str) {
    if (str.length > 10) {
        return (str.substring(0, 10) + "...");
    }
    else {
        return str;
    }
}

titleArray.forEach(function(title){
  constructli( title );
});

parent[0].addEventListener('click', function(event){
  var type = event.target.getAttribute('type');
  // console.log(type);
  switch(type)
  {
    case "add":
          // var title = parent[0].getElementsByTagName("input")[0];
          // var description = parent[0].getElementsByTagName("textarea")[0];
          // console.log(title.value);
          // titleArray.push(title.value);
          // localStorage.setItem('title', JSON.stringify(titleArray));
          //
          // descriptionArray.push(description.value);
          // localStorage.setItem('description', JSON.stringify(descriptionArray));
          //position: absolute;

          emptyspan = constructli("");
          textarea = parent[0].getElementsByTagName('textarea')[0];
          textarea.value="";
          textarea.focus();
      break;

      case "show":
          let index = titleArray.indexOf(event.target.getElementsByTagName('span')[0].innerHTML);
          parent[0].getElementsByTagName('textarea')[0].value = descriptionArray[index];
          break;
      case "Edit":
          textarea = parent[0].getElementsByTagName('textarea')[0];

      break;
  }
});


// iifi
// var obj = {
//   "container": '#main',
//
// }
