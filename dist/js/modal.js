var modal = document.getElementById("SMSModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

onload = setTimeout(function() { openmodal(); }, 4000);
function openmodal() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}