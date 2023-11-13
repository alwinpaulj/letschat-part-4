//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name");

    function send()
{
      msg = document.getElementById("msg").Value;
      firebase.database().ref(room_name).push({
            name:User_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").Value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

