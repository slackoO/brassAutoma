document.addEventListener('DOMContentLoaded', () => {
    let card = document.querySelector('.card')
    let timerId = setInterval(addListElement, 1000)

    function addListElement() {
        card.appendChild(document.createElement("li"))
    }
})