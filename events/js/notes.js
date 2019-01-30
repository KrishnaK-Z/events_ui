var parent = document.getElementsByClassName('main');

var titleArray = localStorage.getItem('title') ?
                JSON.parse(localStorage.getItem('title')) : [];
var descriptionArray = localStorage.getItem('description') ?
                JSON.parse(localStorage.getItem('description')) : [];

var ul = parent[0].getElementsByTagName('ul')[0];

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
}

titleArray.forEach(function(title){
  constructli( title );
});

parent[0].addEventListener('click', function(event){
  var type = event.target.getAttribute('type');
  // console.log(type);
  switch(type)
  {
    case "Add":
          var title = parent[0].getElementsByTagName("input")[0];
          var description = parent[0].getElementsByTagName("textarea")[0];
          console.log(title.value);
          titleArray.push(title.value);
          localStorage.setItem('title', JSON.stringify(titleArray));

          descriptionArray.push(description.value);
          localStorage.setItem('description', JSON.stringify(descriptionArray));

          constructli(title.value);
      break;

      case "show":
          let index = titleArray.indexOf(event.target.getElementsByTagName('span')[0].innerHTML);
          parent[0].getElementsByTagName('textarea')[0].value = descriptionArray[index];
          break;
  }
});
