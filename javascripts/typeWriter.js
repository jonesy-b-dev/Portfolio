var i = 0;
var txt = 'Hi, I’m Jonas de Bruin(2005), a music producer (Jonesy B), part of the music duo The Rhythm Junctions and a software developer student from the Netherlands. \n I like to make desktop applications, games and music!';
var speed = 4;

window.onload = () => {
  typeWriter();
}

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("mainText").innerHTML += txt.charAt(i);
    i++;
    var typingSpeed = Math.floor(Math.random() * 35) + speed; 
    var delay = txt[i] === ' ' ? typingSpeed * 2 : typingSpeed;
    setTimeout(typeWriter, delay);
  }
}