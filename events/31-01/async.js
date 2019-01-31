var arr = [
  {id:1, desc: "Description1"},
  {id:2, desc: "Description2"},
  {id:3 ,desc: "Description3"},
  {id:7 ,desc: "Description7"}
];


function verifyid(id){
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      for(var i=0 ; i<arr.length; i++){
        if(arr[i].id === id)
        resolve(arr[i]);
      }
      reject(false);
    },1000);
  } );
}

function update(obj){
  return new Promise( (resolve, reject) => {
    setTimeout( ()=>{
      if( !obj )
      reject("fail");
      obj.desc = "Updated1";
      resolve(obj);
    },1000 );
  } );
}


var id = Math.round(Math.random() * 10);

// console.log(id);

// verifyid(id).then( obj => {
//   console.log(obj);
//   return update(obj);
// } ).then( mod => {
//   console.log(mod);
// } ).catch( err => {
//   console.error(err);
// } )


async function exe(){
  try {
    let obj = await verifyid(id);
    let mod = await update(obj);
    console.log(mod);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Executed");
  }
}

// exe();

function create(ele)
{
  return document.createElement(ele);
}

function append(parent, el) {
   return parent.appendChild(el);
 }

function inner(ele, value){
  ele.innerHTML = value;
}

async function fetchTitleId(){
  let result = await fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "get"
  });
  let body = await result.json();
  // console.log(body[7].title);
  let ul = document.getElementById('list');
  let newele;
  let span,span1;
  for(let i=0; i<body.length; i++){
    newele = create('li');
    span = create('span');
    span1 = create('span');
    inner(span1, body[i].id);
    inner(span, body[i].title);
    append(newele, span1);
    append(newele,span);
    append(ul, newele);
  }
}
fetchTitleId();







//promises
//fetch
//async await
