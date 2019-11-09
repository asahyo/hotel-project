//create global varieble for each room tha keeps track of how many people are in the room
//add +1 to global var in the checkIn function
//-1 from the global var in the checkOut funcion
var i = 0;
var x = document.getElementsByTagName('ol');
var isVisible = true;

var date = new Date();
//sets each array number to the getMonth
var m = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
var month = m[date.getMonth()];
var w = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var weekday = w[date.getDay()];
var d = new Date();
var date = d.getDate();

function checkIn(){
  var newList = document.createElement('li');
  var guest = document.getElementById('checkin').value;
  var x = document.createTextNode(guest+" - "+month+", "+weekday+" "+date);
  newList.appendChild(x);
  var position = document.getElementsByTagName('ol')[0];
  document.getElementById('checkin').value = " ";
  //if less than 4 guests keep on append
    if(i < 4){
      i++;
      position.appendChild(newList);
    }
    //if greater than 4 guests, room is full
    else{
      document.getElementById('fullroom').innerHTML = "room is full!!";
    }
        
}

function checkOut(){
  i--;
  var userNum = document.getElementById('checkout').value;
  var y = parseInt(userNum);
  var child = document.getElementsByTagName('li')[y-1];
  var parent = child.parentNode;
  parent.removeChild(child);
  //when check out, make sure "room is full" is erased
  document.getElementById('checkout').value = " ";
  //when clear room, make sure "room is full" is erased
  document.getElementById('fullroom').innerHTML = " ";
  
}
  
function clearAll(){
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML = "";
    
  }
  document.getElementById('fullroom').innerHTML = " ";
}

//lock room button makes the checkin button hidden and visible
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

