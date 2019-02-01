var token = [];


var loginWrapper = document.getElementsByClassName('loginWrapper');

var btn = document.getElementById('registerbtn');

function check(){
  if(localStorage.getItem('token'))
  window.location = "notes.html"; 
}

btn.addEventListener("click", function(){
  var regform = document.getElementById("registerform");

  fetch("http://192.168.100.162:3000/auth/register",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(toJSONString( regform )),

  }).then( function(result){
    console.log(result);
    return result.json();
  } )
  .then( (data) => {
    if(!data.isSuccess)
    alert(data.responseBody.errorMessage);
    else {

    }
  } );

});



// var regform = document.getElementById("registerform");
// regform.addEventListener("submit", (event) => {
//   console.log("gi");
// });

var logform = document.getElementById( "logform" );
logform.addEventListener('submit', function( event ){
  event.preventDefault();
  var json = toJSONString( this );
// console.log(json);
  fetch("http://192.168.100.162:3000/auth/login",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(json),

  }).then( function(result){
    return result.json();
  } )
  .then( (data) => {

    if(!data.isSuccess)
    alert("Try Again!!!");
    else {
      console.log(data);
      console.log(data.responseBody.token);
      localStorage.removeItem('token');
      localStorage.setItem('token',[data.responseBody.token]);
      window.location = "notes.html";
    }
  } );

});


for( var i=0;i<loginWrapper.length; i++ ){
  loginWrapper[i].addEventListener("keydown",function(event){
    event.target.parentNode.classList.add('focused');
  });
}

var register_tap = document.getElementById('register-tap');
register_tap.addEventListener('click',function(){
  loginWrapper[0].style.left = "-100%";
  loginWrapper[1].style.left = "60%";
  register_tap.style.top = "120%";
  login_tap.style.top = "50%";
});

var login_tap = document.getElementById('login-tap');
login_tap.addEventListener('click',function(){
  loginWrapper[0].style.left = "10%";
  loginWrapper[1].style.left = "-100%";
  login_tap.style.top = "-120%";
  register_tap.style.top = "50%";
});
