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
