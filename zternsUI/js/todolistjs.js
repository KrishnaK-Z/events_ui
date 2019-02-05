  const elements = {
    item: document.getElementById('item'),
    ul: document.getElementById('to-do-list'),
    error: document.getElementById('error'),
    main: document.getElementsByClassName("container")[0],
  }

  let listArray = localStorage.getItem('lists') ?
                  JSON.parse(localStorage.getItem('lists')) : [];




   listArray.forEach( function( value ){
     constructli( value );
   } );

   elements.main.addEventListener('click', (event) => {
   let op = event.target.parentNode.getAttribute('data-type');

   switch (op) {

     case "add":
             event.preventDefault();

             if(elements.error.childNodes[0])
               elements.error.removeChild(elements.error.childNodes[0]);

             if(elements.item.value === '')
             {
               let t = document.createTextNode("Please Enter the list");
               elements.error.appendChild(t);
             }
             else {
               listArray.push( elements.item.value );
               localStorage.setItem('lists', JSON.stringify(listArray));
               constructli( elements.item.value );
               elements.item.value = " ";
             }
     break;

     case "delete":
             let liParent = event.target.parentNode.parentNode;
             let ul = liParent.parentNode;
             ul.removeChild(liParent);
             let deleteitem = liParent.childNodes[1];
             let index = listArray.indexOf(deleteitem.innerText);
             listArray.splice( index ,1);
             localStorage.setItem('lists', JSON.stringify(listArray));
       break;

     default:

   }

 });
