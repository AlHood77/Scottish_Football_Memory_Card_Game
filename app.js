document.addEventListener('DOMContentLoaded', () => {
    // card options

    const cardArray = [
        {
            name: 'annan',
            img: 'images/annan.png'
        },
        {
            name: 'annan',
            img: 'images/annan.png'
        },
        {
            name: 'cowdenbeath',
            img: 'images/cowdenbeath.png'
        },
        {
            name: 'cowdenbeath',
            img: 'images/cowdenbeath.png'
        },
        {
            name: 'dundee',
            img: 'images/dundee.png'
        },
        {
            name: 'dundee',
            img: 'images/dundee.png'
        },
        {
            name: 'hearts',
            img: 'images/hearts.png'
        },
        {
            name: 'hearts',
            img: 'images/hearts.png'
        },
        {
            name: 'rangers',
            img: 'images/rangers.png'
        },
        {
            name: 'rangers',
            img: 'images/rangers.png'
        },
        {
            name: 'raith',
            img: 'images/raith.png'
        },
        {
            name: 'raith',
            img: 'images/raith.png'
        }
    ]


cardArray.sort(() => 0.5 - Math.random())

// pick out element with class name of grid
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create game board

// loop over each card array and for each card create an image element
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')

        // link each card to the football image
        card.setAttribute('src', 'images/football.png')

        // give each card a data id from 0 to 11
        card.setAttribute('data-id', i)

        card.addEventListener('click', flipCard)

        // append each card with the div with the class name of grid
        grid.appendChild(card)

    }
}


// check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/football.png')
        cards[optionTwoId].setAttribute('src', 'images/football.png')
        alert('Sorry, try again!')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all'
    }

}



// flip your card
function flipCard() {
    // get the dataId attribute we created in the createBoard function above
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}


createBoard()





})