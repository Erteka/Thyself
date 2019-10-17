var messagesRef = firebase.database().ref('messages');

document.getElementById('submit').addEventListener('click',e=>{
  e.preventDefault();
  var name=document.getElementById('name').value;
  var company=document.getElementById('company').value;
  var email=document.getElementById('email').value;
  var phone=document.getElementById('phone').value;
  var message=document.getElementById('message').value;

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
  document.getElementById('contactForm').reset();
});


function createTable() {
  var table = document.getElementById('adminDataTable');

  var emailsRef = firebase.database().ref("messages");

  emailsRef.on('value', data => {
    var alldata = data.val();
    var keys = Object.keys(alldata);
    
    for (var i = 0; i < keys.length; i++) {
      var index = keys[i];

        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = alldata[index].name;
        cell2.innerHTML = alldata[index].email;
        cell3.innerHTML = alldata[index].company;
        cell4.innerHTML = alldata[index].message;
      }
  }, errEmailsData);
}

function errEmailsData(err) {
  console.log("Error!! id: ");
  console.log(err);
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    if(user.email=='admin@gmail.com'){
      document.getElementById('dataTable').style.display='none';
      document.getElementById('adminTable').style.display='block';
      document.getElementById('dataTableHeader').innerHTML="Admin Data";
      createTable();
    }else{
      document.getElementById('adminTable').style.display='none';
    }
  } else {
    // No user is signed in.
  }
});
