
 var firebaseConfig = {
      apiKey: "AIzaSyD32yMY58o9fHGoz4VCNohY_j7aHWLCmbI",
      authDomain: "kwitter-75da2.firebaseapp.com",
      databaseURL: "https://kwitter-75da2-default-rtdb.firebaseio.com",
      projectId: "kwitter-75da2",
      storageBucket: "kwitter-75da2.appspot.com",
      messagingSenderId: "121235115119",
      appId: "1:121235115119:web:03489595321b5b8164119a"
    };
    
  
    firebase.initializeApp(firebaseConfig);
    user_name =localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name );

      window.location = "kwitter_page.html";

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
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

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
     window.location = "index.html";
}

