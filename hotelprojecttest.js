var isVisible = true;

var date = new Date();
var m = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
var month = m[date.getMonth()];
var w = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var weekday = w[date.getDay()];
var d = new Date();
var date = d.getDate();

var i = 0;
var s = 0;

//ROOM 1
function checkIn(){
  var newList = document.createElement('li');
  var guest = document.getElementById('checkin').value;
  var x = document.createTextNode(guest+" - "+month+", "+weekday+" "+date);
  newList.appendChild(x);
  document.getElementById('checkin').value = " ";
    if(i < 4){
      i++;
      var position = document.getElementById('pos1');
      position.appendChild(newList);
    }
    else{
      document.getElementById('fullroom').innerHTML = "room is full!!";
    }
}
function checkOut(){
  i--;
  var room = document.getElementById('room1');
  var userNum = document.getElementById('checkout').value;
  var y = parseInt(userNum);
  //-1 is so that computer knows the index value
  var child = room.getElementsByTagName('li')[y-1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('checkout').value = " ";
  document.getElementById('fullroom').innerHTML = " ";
}
function clearAll(){
  var room = document.getElementById('room1');
  var x = room.getElementsByTagName('ol');
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML = "";
  }
  i--;
  document.getElementById('fullroom').innerHTML = " ";
}
function lockRoom(){
  if (isVisible == true){
    document.getElementById('lock').style.visibility = "hidden";
    isVisible = false;
  }
  else{
    document.getElementById('lock').style.visibility = "visible";
    isVisible = true;
  }
}


//ROOM 2
function checkIn2(){
  var newList = document.createElement('li');
  var guest = document.getElementById('checkin2').value;
  var x = document.createTextNode(guest+" - "+month+", "+weekday+" "+date);
  newList.appendChild(x);
  var position = document.getElementById('pos2');
  document.getElementById('checkin2').value = " ";
    if(s < 4){
      s++;
      position.appendChild(newList);
    }
    else{
      document.getElementById('fullroom2').innerHTML = "room is full!!";
    }
}
function checkOut2(){
  s--;
  var room = document.getElementById('room2');
  var userNum = document.getElementById('checkout2').value;
  var y = parseInt(userNum);
  var child = room.getElementsByTagName('li')[y-1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('checkout2').value = " ";
  document.getElementById('fullroom2').innerHTML = " ";
}
function clearAll2(){
  var room = document.getElementById('room2');
  var x = room.getElementsByTagName('ol');
  for (s = 0; s < x.length; s++) {
    x[s].innerHTML = "";
  }
  s--;
  document.getElementById('fullroom2').innerHTML = " ";
}
function lockRoom2(){
  if (isVisible === true){
    document.getElementById('lock2').style.visibility = "hidden";
    isVisible = false;
  }
  else{
    document.getElementById('lock2').style.visibility = "visible";
    isVisible = true;
  }
}

function showvar() {
  document.getElementById('var').innerHTML = i;
  document.getElementById('var2').innerHTML = s;
}
 
