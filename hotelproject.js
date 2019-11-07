var i = 0;
var x = document.getElementsByTagName('ol');
var isVisible = true;

var date = new Date();
var m = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
var month = m[date.getMonth()];

var n = d.getDate();
document.getElementById("demo").innerHTML = n;


function checkIn(){
  var newList = document.createElement('li');
  var guest = document.getElementById('checkin').value;
  var x = document.createTextNode(guest+" "+month);
  newList.appendChild(x);
  var position = document.getElementsByTagName('ol')[0];
  document.getElementById('checkin').value = " ";

    if(i < 4){
      i++;
      position.appendChild(newList);
    }
    else{
      document.getElementById('fullroom').innerHTML = "room is full!!";
    }
        
}

function checkOut(){
  var userNum = document.getElementById('checkout').value;
  var y = parseInt(userNum);
  var child = document.getElementsByTagName('li')[y-1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('checkout').value = " ";
  document.getElementById('fullroom').innerHTML = " ";
  
}
  
function clearAll(){
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML = "";
    
  }
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

