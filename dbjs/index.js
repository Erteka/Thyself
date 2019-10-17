
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('Logged in');
    document.getElementById('login').style.display='none';
    document.getElementById('logout').style.display='block';
    document.getElementById('signup').style.display='none';
    if(user.email=='admin@gmail.com'){
      document.getElementById('contactID').innerHTML="Admin Data";
    }
  } else {
    console.log('Not logged in');
    document.getElementById('login').style.display='block';
    document.getElementById('logout').style.display='none';
    document.getElementById('signup').style.display='block';
  }
});

function logout(){
  firebase.auth().signOut().then(x=>{
    document.location.href = "./index.html";
  });
}

var user = firebase.auth().currentUser;

console.log(user);