
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBj1YBZyGuOcucPIkUjHo_zTzIi17Um224",
      authDomain: "kwitter-4ba2d.firebaseapp.com",
      databaseURL: "https://kwitter-4ba2d-default-rtdb.firebaseio.com",
      projectId: "kwitter-4ba2d",
      storageBucket: "kwitter-4ba2d.appspot.com",
      messagingSenderId: "653651659889",
      appId: "1:653651659889:web:460e7b33fe98c8d6569fd0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";
    function addRoom()
    {
          room_name =document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding to room"
          });
          localStorage.setItem("room_name" , room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name - " + Room_names );
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML +=row;
      });
});
}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";

}
