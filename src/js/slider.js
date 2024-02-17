const bolinhas = document.querySelectorAll('.bolinha')
const voltarBotao = document.getElementById('voltar')
const avancarBotao = document.getElementById('avancar')
const slide = document.getElementById('slide')

bolinhas.forEach((bolinha) => {
  bolinha.addEventListener('click', () => {
    selecionarBolinha(bolinha)
  })
})

voltarBotao.addEventListener('click', () => {
  const indexAtual = encontrarIndex()
  const novoIndex = (indexAtual - 1 + bolinhas.length) % bolinhas.length
  inserirNovoIndex(novoIndex)
})

avancarBotao.addEventListener('click', () => {
  const indexAtual = encontrarIndex()
  const novoIndex = (indexAtual + 1) % bolinhas.length
  inserirNovoIndex(novoIndex)
})

function inserirNovoIndex(novoIndex) {
  const novaBolinha = bolinhas[novoIndex]
  selecionarBolinha(novaBolinha)
}

function encontrarIndex() {
  const bolinhaSelecionada = document.querySelector('.selecionada')
  const indexAtual = Array.from(bolinhas).indexOf(bolinhaSelecionada)
  return indexAtual
}

function selecionarBolinha(bolinha) {
  removerSelecaoDaBolinha()

  // Desaparecimento
  slide.style.display = 'none'

  // Cor de bolinha selecionada
  bolinha.classList.add('selecionada')

  // Troca de dados
  trocarTitulo(bolinha)
  trocarDescricao(bolinha)
  trocarImg(bolinha)

  setTimeout(() => {
    // Desaparecimento suave
    slide.style.display = 'flex'

    // Rolar tela
    slide.scrollIntoView({ behavior: "smooth" })

    // Acelerar animação
    document.querySelector('.retangulo').style.animationDuration = '.5s'
    document.querySelector('.foto').style.animationDuration = '.5s'
  }, 0)
}

function trocarImg(bolinha) {
  const capaImg = document.querySelector('#capa-img')
  capaImg.src = bolinha.getAttribute('data-img')
  capaImg.alt = bolinha.getAttribute('data-alt')
}

function trocarDescricao(bolinha) {
  const descricao = document.querySelector('#descricao-da-obra')
  descricao.textContent = bolinha.getAttribute('data-description')
}

function trocarTitulo(bolinha) {
  const titulo = document.querySelector('#titulo-da-obra')
  titulo.textContent = bolinha.getAttribute('data-name')
}

function removerSelecaoDaBolinha() {
  const bolinhaSelecionada = document.querySelector('.selecionada')
  bolinhaSelecionada.classList.remove('selecionada')
}
