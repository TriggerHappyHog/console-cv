var i = 0;
var txt = "<strong> + 'HEADING' + </strong>";
var speed = 10;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("output").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}