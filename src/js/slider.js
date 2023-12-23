let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  // Declaração de variáveis
  let slides = document.querySelectorAll(".slide");
  const bolinhas = document.querySelectorAll(".bolinha")
  
  // Para voltar ao começo da imagem em telas menores
  if (window.innerWidth < 600) {
    window.scrollTo({top: 110, behavior: 'smooth'});
  } else if (window.innerWidth < 1000) {
    window.scrollTo({top: 250, behavior: 'smooth'});
  } else if (window.innerWidth < 1200) {
    window.scrollTo({top: 160, behavior: 'smooth'});
  }

  // Remove a classe 'aparecida' de todas as folhas
  slides.forEach((slide) => {
    slide.classList.remove('aparecida')
  })

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  // Adiciona a classe 'aparecida' à folha correspondente
  slides[slideIndex - 1].classList.add('aparecida')

  // Remove a classe 'selecionada' de todas as bolinhas
  bolinhas.forEach((bolinha) => {
      bolinha.classList.remove('selecionada')
  })

  // Adiciona a classe 'selecionada' à bolinha correspondente
  bolinhas[slideIndex - 1].classList.add('selecionada')
}