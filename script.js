$('.owl-carousel').owlCarousel({
  autoplay: true,
  autoplayHoverPause: true,
  loop: true,
  margin: 20,
  responsiveClass: true,
  nav: true,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    568: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const video = document.querySelector("myVideo");

// Slow it to 50% speed
video.playbackRate = 5;