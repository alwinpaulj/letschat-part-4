// Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyDgJGaa8ssDLVkX6PHHYp4tpZCoh9n3-2I",
   authDomain: "lets-chat-44218.firebaseapp.com",
   databaseURL: "https://lets-chat-44218-default-rtdb.firebaseio.com",
   projectId: "lets-chat-44218",
   storageBucket: "lets-chat-44218.appspot.com",
   messagingSenderId: "583283003633",
   appId: "1:583283003633:web:c072222a09d2c899351950"
 };
 
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome  "+ user_name +"!";

    function addRoom() { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }
     

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }