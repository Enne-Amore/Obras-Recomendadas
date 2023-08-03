let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let foto = document.getElementsByClassName("foto");
    if (window.innerWidth < 600) {
      window.scrollTo({top: 110, behavior: 'smooth'});
    } else if (window.innerWidth < 1000) {
      window.scrollTo({top: 250, behavior: 'smooth'});
    } else if (window.innerWidth < 1200) {
      window.scrollTo({top: 160, behavior: 'smooth'});
    }
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
  }