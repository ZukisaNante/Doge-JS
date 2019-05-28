// page loading
function loading() {
  var text = "Doggo";
  if (navigator.cookieEnabled == true) {
    text = "Woof!";
  } else {
    text = "Doggo.";
  }
  document.getElementById("doge").innerHTML = text;
}
// mouseover effects
function mOver(obj) {
    obj.innerHTML = "Woof woof!"
  }
  function mOut(obj) {
    obj.innerHTML = "Woof!"
  }
  // image show/hide
  function myPic() {
    var x = document.getElementById("showimage") ;
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
  }
 
