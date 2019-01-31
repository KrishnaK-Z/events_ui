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

console.log(id);

verifyid(id).then( obj => {
  console.log(obj);
  return update(obj);
} ).then( mod => {
  console.log(mod);
} ).catch( err => {
  console.error(err);
} )
