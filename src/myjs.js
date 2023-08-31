function myMenu(menuItem) {
  var x = document.getElementById(menuItem);
  var currentDisplay = window.getComputedStyle(x).getPropertyValue("display");
  if (currentDisplay === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



  function myProj(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

  function myInt(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
