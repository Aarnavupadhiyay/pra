  var firebaseConfig = {
    apiKey: "AIzaSyC4CZccQ78HVoV82fshEpKSfruzC5lOWbY",
    authDomain: "kwitter-dcb4e.firebaseapp.com",
    databaseURL: "https://kwitter-dcb4e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kwitter-dcb4e",
    storageBucket: "kwitter-dcb4e.appspot.com",
    messagingSenderId: "599070401259",
    appId: "1:599070401259:web:dd96ec7bf8d883fc5694ae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser()
{
user_name = document.getElementById("addUsername").value
firebace.databace().ref("/").child("user_name").update({
purpose : "addins user"
})
}
