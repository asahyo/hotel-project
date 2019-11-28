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
var v = 0;
var t = 0;
var a = 0;
var m = 0;

//ROOM 1
function checkIn(){
  var newList = document.createElement('li');
  var newListguest = document.createElement('li');
  var guest = document.getElementById('checkin').value;
  var guestlist = document.getElementById('checkin').value;
  var x = document.createTextNode(guest+" - "+month+", "+weekday+" "+date);
  var xlist = document.createTextNode(guestlist+" - "+month+", "+weekday+" "+date);
  newList.appendChild(x);
  newListguest.appendChild(xlist);
  var position = document.getElementById('pos1');
  var list = document.getElementById('guestlist');
  document.getElementById('checkin').value = " ";
    if(i < 4){
      i++;
      position.appendChild(newList);
      list.appendChild(newListguest);
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
  document.getElementById('checkout').value = "";
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
  var newListguest = document.createElement('li');
  var guest = document.getElementById('checkin2').value;
  var guestlist = document.getElementById('checkin2').value;
  var x = document.createTextNode(guest+" - "+month+", "+weekday+" "+date);
  var xlist = document.createTextNode(guestlist+" - "+month+", "+weekday+" "+date);
  newList.appendChild(x);
  newListguest.appendChild(xlist);
  var position = document.getElementById('pos2');
  var list = document.getElementById('guestlist');
  document.getElementById('checkin2').value = " ";
    if(s < 4){
      s++;
      position.appendChild(newList);
      list.appendChild(newListguest);
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
  document.getElementById('checkout2').value = "";
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

//ROOM 3
function checkIn3(){
  var newList = document.createElement('li');
  var newListguest = document.createElement('li');
  var guest = document.getElementById('checkin3').value;
  var guestlist = document.getElementById('checkin3').value;
  var x = document.createTextNode(guest+" - "+month+", "+weekday+" "+date);
  var xlist = document.createTextNode(guestlist+" - "+month+", "+weekday+" "+date);
  newList.appendChild(x);
  newListguest.appendChild(xlist);
  var position = document.getElementById('pos3');
  var list = document.getElementById('guestlist');
  document.getElementById('checkin3').value = " ";
    if(v < 4){
      v++;
      position.appendChild(newList);
      list.appendChild(newListguest);
    }
    else{
      document.getElementById('fullroom3').innerHTML = "room is full!!";
    }
}
function checkOut3(){
  v--;
  var room = document.getElementById('room3');
  var userNum = document.getElementById('checkout3').value;
  var y = parseInt(userNum);
  var child = room.getElementsByTagName('li')[y-1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('checkout3').value = "";
  document.getElementById('fullroom3').innerHTML = " ";
}
function clearAll3(){
  var room = document.getElementById('room3');
  var x = room.getElementsByTagName('ol');
  for (v = 0; v < x.length; v++) {
    x[v].innerHTML = "";
  }
  v--;
  document.getElementById('fullroom3').innerHTML = " ";
}
function lockRoom3(){
  if (isVisible === true){
    document.getElementById('lock3').style.visibility = "hidden";
    isVisible = false;
  }
  else{
    document.getElementById('lock3').style.visibility = "visible";
    isVisible = true;
  }
}

//ROOM 4
function checkIn4(){
  var newList = document.createElement('li');
  var newListguest = document.createElement('li');
  var guest = document.getElementById('checkin4').value;
  var guestlist = document.getElementById('checkin4').value;
  var x = document.createTextNode(guest+" - "+month+", "+weekday+" "+date);
  var xlist = document.createTextNode(guestlist+" - "+month+", "+weekday+" "+date);
  newList.appendChild(x);
  newListguest.appendChild(xlist);
  var position = document.getElementById('pos4');
  var list = document.getElementById('guestlist');
  document.getElementById('checkin4').value = " ";
    if(t < 4){
      t++;
      position.appendChild(newList);
      list.appendChild(newListguest);
    }
    else{
      document.getElementById('fullroom4').innerHTML = "room is full!!";
    }
}
function checkOut4(){
  t--;
  var room = document.getElementById('room4');
  var userNum = document.getElementById('checkout4').value;
  var y = parseInt(userNum);
  var child = room.getElementsByTagName('li')[y-1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('checkout4').value = "";
  document.getElementById('fullroom4').innerHTML = " ";
}
function clearAll4(){
  var room = document.getElementById('room4');
  var x = room.getElementsByTagName('ol');
  for (t = 0; t < x.length; t++) {
    x[t].innerHTML = "";
  }
  t--;
  document.getElementById('fullroom4').innerHTML = " ";
}
function lockRoom4(){
  if (isVisible === true){
    document.getElementById('lock4').style.visibility = "hidden";
    isVisible = false;
  }
  else{
    document.getElementById('lock4').style.visibility = "visible";
    isVisible = true;
  }
}

//ROOM 5
function checkIn5(){
  var newList = document.createElement('li');
  var newListguest = document.createElement('li');
  var guest = document.getElementById('checkin5').value;
  var guestlist = document.getElementById('checkin5').value;
  var x = document.createTextNode(guest+" - "+month+", "+weekday+" "+date);
  var xlist = document.createTextNode(guestlist+" - "+month+", "+weekday+" "+date);
  newList.appendChild(x);
  newListguest.appendChild(xlist);
  var position = document.getElementById('pos5');
  var list = document.getElementById('guestlist');
  document.getElementById('checkin5').value = " ";
    if(a < 4){
      a++;
      position.appendChild(newList);
      list.appendChild(newListguest);
    }
    else{
      document.getElementById('fullroom5').innerHTML = "room is full!!";
    }
}
function checkOut5(){
  a--;
  var room = document.getElementById('room5');
  var userNum = document.getElementById('checkout5').value;
  var y = parseInt(userNum);
  var child = room.getElementsByTagName('li')[y-1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('checkout5').value = "";
  document.getElementById('fullroom5').innerHTML = " ";
}
function clearAll5(){
  var room = document.getElementById('room5');
  var x = room.getElementsByTagName('ol');
  for (a = 0; a < x.length; a++) {
    x[a].innerHTML = "";
  }
  a--;
  document.getElementById('fullroom5').innerHTML = " ";
}
function lockRoom5(){
  if (isVisible === true){
    document.getElementById('lock5').style.visibility = "hidden";
    isVisible = false;
  }
  else{
    document.getElementById('lock5').style.visibility = "visible";
    isVisible = true;
  }
}

//ROOM 6
function checkIn6(){
  var newList = document.createElement('li');
  var newListguest = document.createElement('li');
  var guest = document.getElementById('checkin6').value;
  var guestlist = document.getElementById('checkin6').value;
  var x = document.createTextNode(guest+" - "+month+", "+weekday+" "+date);
  var xlist = document.createTextNode(guestlist+" - "+month+", "+weekday+" "+date);
  newList.appendChild(x);
  newListguest.appendChild(xlist);
  var position = document.getElementById('pos6');
  var list = document.getElementById('guestlist');
  document.getElementById('checkin6').value = " ";
    if(m < 4){
      m++;
      position.appendChild(newList);
      list.appendChild(newListguest);
    }
    else{
      document.getElementById('fullroom6').innerHTML = "room is full!!";
    }
}
function checkOut6(){
  m--;
  var room = document.getElementById('room6');
  var userNum = document.getElementById('checkout6').value;
  var y = parseInt(userNum);
  var child = room.getElementsByTagName('li')[y-1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('checkout6').value = "";
  document.getElementById('fullroom6').innerHTML = " ";
}
function clearAll6(){
  var room = document.getElementById('room6');
  var x = room.getElementsByTagName('ol');
  for (m = 0; m < x.length; m++) {
    x[m].innerHTML = "";
  }
  m--;
  document.getElementById('fullroom6').innerHTML = " ";
}
function lockRoom6(){
  if (isVisible === true){
    document.getElementById('lock6').style.visibility = "hidden";
    isVisible = false;
  }
  else{
    document.getElementById('lock6').style.visibility = "visible";
    isVisible = true;
  }
}
 
