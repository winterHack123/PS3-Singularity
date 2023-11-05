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



function darkTheme() {
  var theme = document.getElementsByTagName('link')[0];
  theme.setAttribute('href', 'styles/style_dark.css');
  var nav = document.getElementById('nav');
  nav.setAttribute('src', 'src/nav-white.png');
}

function lightTheme() {
  var theme = document.getElementsByTagName('link')[0];
  theme.setAttribute('href', 'styles/style.css');
  var nav = document.getElementById('nav');
  nav.setAttribute('src', 'src/nav.png');
}

function toggleMenu() {
  var menu = document.getElementById('navbar');
  if(menu.style.left == '-100%') {
    menu.style.left = 0;
  }
  else{
    menu.style.left = '-100%';
  }
}
