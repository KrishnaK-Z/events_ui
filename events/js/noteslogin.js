var loginWrapper = document.getElementsByClassName('loginWrapper');


var form = document.getElementById( "logform" );
form.addEventListener('submit', function( event ){
  event.preventDefault();
  var json = toJSONString( this );
  console.log(json);
  // let result = await fetch("http://192.168.100.162:3000/auth/login",{
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // });
  // let body = await result.json();
  // console.log(body);
  // if(body.isSuccess)
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

// let loginbtn = document.getElementById('loginbtn');
// loginbtn.addEventListener('click', function(event){
//   event.preventDefault();
//   notelogin();
// });

// async function notelogin(){
//   var data = new FormData($('#login_form')[0]);
//
//
//
// }



let registerbtn = document.getElementById('registerbtn');
registerbtn.addEventListener('click', function(event){
  event.preventDefault();

});
