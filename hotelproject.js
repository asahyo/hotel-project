var i = 0;
var arr = newList;


function checkIn(){
  var newList = document.createElement('li');
  var x = document.createTextNode(document.getElementById('checkin').value);
  newList.appendChild(x);
  var position = document.getElementsByTagName('ol')[0];
  document.getElementById('checkin').value = " ";

    if(i > 4){
      document.getElementById('fullroom').innerHTML = "room is full!!";
      
    }
    else{
      i++;
      position.appendChild(newList);
      
    }
        
}

function checkOut(){
  var userNum = document.getElementById('checkout').value;
  var y = parseInt(userNum);
  var child = document.getElementsByTagName('li')[y-1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('checkout').value = " ";
  
}
  
function clearAll(){
  var arr = [];
}
