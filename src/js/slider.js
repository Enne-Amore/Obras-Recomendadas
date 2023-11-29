let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let bolinhas = document.getElementsByClassName("bolinha")
    
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
    for (i = 0; i < bolinhas.length; i++) {
      if (bolinhas[i].style.background = "rgba(0, 0, 0, 0.151)") {
        bolinhas[slideIndex-1].style.background = "#23395b"
      }
    }
    slides[slideIndex-1].style.display = "flex";
  }