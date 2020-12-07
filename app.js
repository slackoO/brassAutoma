const drawBtn = document.querySelector('#drawButton')
const railEraBtn = document.querySelector('#railEraButton')
const cardFront = document.querySelector('#cardFront')
const cardBack = document.querySelector('#cardBack')
let current = 0
let cardFrontSrcRoot = "img/fronts/FRONT_R"
let cardBackSrcRoot = "img/backs/BACK_R"
let imageExtension = ".jpg"
const numberOfCards = 22
let aCards = [1, 2, 7, 8, 10, 11, 13, 16, 17, 18, 20, 22]
let bCards = [3, 4, 6, 12]
let cCards = [5, 9, 14, 15, 19, 21]
let finalDeck = []
let railEraBegun = false

drawBtn.addEventListener('click',start)
railEraBtn.addEventListener('click', startRailEra)

function start() {
    initDeck()
    cardBack.src = cardBackSrcRoot + finalDeck[current++] + imageExtension
    drawBtn.firstChild.data = "Draw"
    drawBtn.removeEventListener('click', start)
    drawBtn.addEventListener('click', drawNextCard)
}

function drawNextCard() {
    cardFront.src = cardFrontSrcRoot + finalDeck[current-1] + imageExtension
    if(current != finalDeck.length) {
        cardBack.src = cardBackSrcRoot + finalDeck[current++] + imageExtension
    }
    else if(!railEraBegun){
        cardBack.src = cardFrontSrcRoot + 0 + imageExtension
        drawBtn.disabled = true
        railEraBtn.style.display = "block"
        railEraBegun = true
    }
    else {
        drawBtn.disabled = true
        railEraBtn.style.display = "none"
        drawBtn.firstChild.data = "Game over"
    }
}

function startRailEra() {
    aCards = [1, 2, 7, 8, 10, 11, 13, 16, 17, 18, 20, 22]
    bCards = [3, 4, 6, 12]
    cCards = [5, 9, 14, 15, 19, 21]
    initDeck()
    drawBtn.disabled = false
    railEraBtn.style.display = "none"
    current = 0
    cardFront.src = ""
    cardBack.src = cardBackSrcRoot + finalDeck[current++] + imageExtension
}

function drawCard(deckToDrawFrom) {
    let cardIdx = Math.floor(Math.random() * deckToDrawFrom.length)
    let cardNumber= deckToDrawFrom[cardIdx]
    deckToDrawFrom.splice(cardIdx, 1)
    return cardNumber
}

function initDeck() {
    let deck = []
    //Select 4 cards from deck A
    for (let i = 0; i < 4; i++) {
        deck.push(drawCard(aCards))
    }
    //Select 3 cards from deck B
    for (let i = 0; i < 3; i++) {
        deck.push(drawCard(bCards))
    }
    //Select 3 cards from deck C
    for (let i = 0; i < 3; i++) {
        deck.push(drawCard(cCards))
    }

    shuffle(deck)

    //Take 1 more from each one
    let lastThree = []
    let card = drawCard(aCards)
    lastThree.push(card)

    card = drawCard(bCards)
    lastThree.push(card)

    card = drawCard(cCards)
    lastThree.push(card)

    console.log(lastThree)

    shuffle(lastThree)

    finalDeck = deck.concat(lastThree)
    console.log(finalDeck)
}

function shuffle(deckToShuffle) {
    for (let i = deckToShuffle.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let temp = deckToShuffle[i]
        deckToShuffle[i] = deckToShuffle[j]
        deckToShuffle[j] = temp
    }
}