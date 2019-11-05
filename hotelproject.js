var i = 0;
var x = new Date();
var x = document.getElementsByTagName('ol');
var isVisible = true;

function checkIn(){
  var newList = document.createElement('li');
  var x = document.createTextNode(document.getElementById('checkin').value);
  newList.appendChild(x);
  var position = document.getElementsByTagName('ol')[0];
  document.getElementById('checkin').value = " ";

    if(i < 4){
      i++;
      position.appendChild(newList);
      if()
    }
    else{
      document.getElementById('fullroom').innerHTML = "room is full!!";
    }
    
    var x = new Date();
    var date = usercheckin.getDate();
    var month = usercheckin.getMonth();
    var year = usercheckin.getFullYear();
    var timestamp = time + ": " + date + "-" +(month+1) + "-" +year;
        
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
    document.getElementById('checkin').style.visibility = "hidden";
    isVisible = false;
  }
  else{
    document.getElementById('checkin').style.visibility = "visible";
    isVisible = true;
  }
}
