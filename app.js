const drawBtn = document.querySelector('#drawButton')
const cardFront = document.querySelector('#cardFront')
const cardBack = document.querySelector('#cardBack')
let current = 0
let cardFrontSrcRoot = "img/fronts/FRONT_R"
let cardBackSrcRoot = "img/backs/BACK_R"
let imageExtension = ".jpg"
const numberOfCards = 22

drawBtn.addEventListener('click',start)

function start() {
    let next = Math.floor(1 + Math.random() * numberOfCards)
    cardBack.src = cardBackSrcRoot + next + imageExtension
    current = next
    drawBtn.removeEventListener('click', start)
    drawBtn.addEventListener('click', drawCard)
}

function drawCard() {
    let next = Math.floor(1 + Math.random() * numberOfCards)
    cardBack.src = cardBackSrcRoot + next + imageExtension
    cardFront.src = cardFrontSrcRoot + current + imageExtension
    current = next
}