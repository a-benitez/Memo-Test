document.addEventListener('DOMContentLoaded', () => {

    //Opciones de Cartas
        const cardArray = [
            {
                name:"fries",
                img: "images/nestor-cristina.png"
            },
            {
                name:"fries",
                img: "images/nestor-cristina.png"
            },
            {
                name:"cheesburguer",
                img: "images/nestor.png"
            },
            {
                name:"cheesburguer",
                img: "images/nestor.png"
            },
            {
                name:"hotdog",
                img: "images/peron-evita.png"
            },
            {
                name:"hotdog",
                img: "images/peron-evita.png"
            },
            {
                name:"ice-cream",
                img: "images/peron_evita_perfil_400x400.png"
            },
            {
                name:"ice-cream",
                img: "images/peron_evita_perfil_400x400.png"
            },
            {
                name:"milkshake",
                img: "images/cristina.png"
            },
            {
                name:"milkshake",
                img: "images/cristina.png"
            },
            {
                name:"pizza",
                img: "images/evita.png"
            },
            {
                name:"pizza",
                img: "images/evita.png"
            },
        ]

    cardArray.sort(() => 0.5 - Math.random())

//Crear el tablero
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

        function createBoard(){
            for (let i=0; i < cardArray.length; i++){
                var card = document.createElement('img')
                card.setAttribute('src','images/blank.png')
                card.setAttribute('data-id', i)
                card.addEventListener('click', flipCard)
                grid.appendChild(card)
            }
        }
    
        createBoard();

//Chequear si coinciden
        function checkForMatch(){
            var cards = document.querySelectorAll('img')
            const optionOneId = cardsChosenId[0]
            const optionTwoId = cardsChosenId[1]
            if(cardsChosen [0] === cardsChosen [1]){
                alert('¡VIVA PERÓN!')
                cards [optionOneId].setAttribute('src', 'images/white.png')
                cards [optionTwoId].setAttribute('src', 'images/white.png')
                cardsWon.push(cardsChosen)
            }else {
                cards [optionOneId].setAttribute('src', 'images/blank.png')
                cards [optionTwoId].setAttribute('src', 'images/blank.png')
                alert('VAMOS A VOLVER')
            }
            cardsChosen = []
            cardsChosenId = []
            resultDisplay.textContent = cardsWon.length
            if(cardsWon === cardArray.length/2){
                resultDisplay.textContent = '¡VIVA PERÓN!'
            }
        }

//Dar vuelta las cartas
        function flipCard(){
            var cardId = this.getAttribute('data-id')
            cardsChosen.push(cardArray[cardId].name)
            cardsChosenId.push(cardId)
            this.setAttribute('src', cardArray[cardId].img)
            if (cardsChosen.length === 2){
                setTimeout(checkForMatch, 500)
            }
        }
})