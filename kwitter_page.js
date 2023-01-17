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
    
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0     
      });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message = message_data['message'];
likes = message_data['like'];
name_with_tag = "<h4>" + name1 +"<imgclass= 'user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class= 'glyphicon glyphicon-thumbs-up'>Like:" + likes + "</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
   likes = document.getElementById(button_id).value;
   updated_likes = Number(likes) + 1;
   console.log(updated_likes);

   firebase.database().ref(room_name).child(message_id).update({
      like: updated_likes
   });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
