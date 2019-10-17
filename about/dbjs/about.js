var messagesRef = firebase.database().ref('messages');

document.getElementById('submit').addEventListener('click',e=>{
  e.preventDefault();
  var name=document.getElementById('name').value;
  var company=document.getElementById('subject').value;
  var email=document.getElementById('email').value;
  var message=document.getElementById('message').value;

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    message:message
  });
  document.getElementById('contactForm').reset();
});