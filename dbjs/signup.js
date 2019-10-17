document.getElementById('signin').addEventListener('click',e=>{
  e.preventDefault();
  var email=document.getElementById('inputEmail').value;
  var pass=document.getElementById('inputPassword').value;
  firebase.auth().createUserWithEmailAndPassword(email, pass).then(cred=>{
    console.log("Logged In");
    document.location.href = "index.html?Signup=Successful";
  }).catch(e=>{
    console.log("Error!  id: "+e.message);
  });
});