var constructli = ( text ) => {
  let li = document.createElement('li');
  let span = document.createElement('span');
  span.innerHTML = text;
  li.appendChild(span);
  let deletebtn = document.createElement('span');
  deletebtn.setAttribute("data-type", "delete");
  deletebtn.id = 'deletebtn';
  deletebtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  li.appendChild(deletebtn);
  elements.ul.appendChild(li);
}
