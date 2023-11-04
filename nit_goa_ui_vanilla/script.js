window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header").style.fontSize = "20px";
    document.getElementById("logo_img").style.width= "5rem";
  } else {
    document.getElementById("header").style.fontSize = "40px";
    document.getElementById("logo_img").style.width= "10rem";
  }
}

var i = 0;
var txt = 'Education is not the Learning of the Facts But the mind to Think';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function darkTheme() {
  var theme = document.getElementsByTagName('link')[0];
  theme.setAttribute('href', 'styles/style_dark.css');
}

function lightTheme() {
  var theme = document.getElementsByTagName('link')[0];
  theme.setAttribute('href', 'styles/style.css');
}
