let cardArray = [
    {
        id: 1,
        name: 'uss-janson-dunham',
        img: 'images/uss-janson-dunham.jpg'
    },
    {
        id: 2,
        name: 'uss-delbert-d-black',
        img: 'images/uss-delbert-d-black.jpg'
    },
    {
        id: 3,
        name: 'bell-412',
        img: 'images/bell-412.jpg'
    },
    {
        id: 4,
        name: 'f-18',
        img: 'images/f-18.jpg'
    },
    {
        id: 5,
        name: 'harrier',
        img: 'images/harrier.jpg'
    },
    {
        id: 6,
        name: 'uss-nimitz',
        img: 'images/uss-nimitz.jpg'
    },
    {
        id: 7,
        name: 'uss-janson-dunham',
        img: 'images/uss-janson-dunham.jpg'
    },
    {
        id: 8,
        name: 'uss-delbert-d-black',
        img: 'images/uss-delbert-d-black.jpg'
    },
    {
        id: 9,
        name: 'bell-412',
        img: 'images/bell-412.jpg'
    },
    {
        id: 10,
        name: 'f-18',
        img: 'images/f-18.jpg'
    },
    {
        id: 11,
        name: 'harrier',
        img: 'images/harrier.jpg'
    },
    {
        id: 12,
        name: 'uss-nimitz',
        img: 'images/uss-nimitz.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid$$ = document.querySelector('[data-function="grid"]');
const score$$ = document.querySelector('[data-function="score"]');
const attempts$$ = document.querySelector('[data-function="attempts"]');
let cardsChosen = [];
let cardsWon = [];

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const cardItem = cardArray[i];
        const card$$ = document.createElement('img');
        card$$.setAttribute('src', 'images/battleship.jpg');
        card$$.setAttribute('data-id', cardItem.id);
        card$$.addEventListener('click', ($event) => flipCard($event.target, i));
        grid$$.appendChild(card$$);
    }
}

function checkForMatch () {

    const optionOne = cardsChosen[0];
    const optionTwo = cardsChosen[1];

    const cardOne$$ = document.querySelector('[data-id="' + optionOne.id + '"]');
    const cardTwo$$ = document.querySelector('[data-id="' + optionTwo.id + '"]');

    if (optionOne.id === optionTwo.id) {
        cardOne$$.setAttribute('src', 'images/battleship.jpg');
        cardTwo$$.setAttribute('src', 'images/battleship.jpg');
        alert('You have clicked the same image!');
    } else if (optionOne.name === optionTwo.name && optionOne.id !== optionTwo.id) {
        cardOne$$.setAttribute('src', 'images/check-match.svg');
        cardTwo$$.setAttribute('src', 'images/check-match.svg');
        cardOne$$.removeEventListener('click', flipCard);
        cardTwo$$.removeEventListener('click', flipCard);
        cardsWon.push(optionOne);
    } else {
        cardOne$$.setAttribute('src', 'images/battleship.jpg');
        cardTwo$$.setAttribute('src', 'images/battleship.jpg');
    }

    cardsChosen = [];

    checkScore();
}

function flipCard (target$$, i) {
    const card = cardArray[i];
    const cardWon = cardsWon.find(findCard => findCard.name === card.name);

    if (cardWon) {
        alert('This card is marked ;)')
    } else {
        cardsChosen.push(card);
        target$$.setAttribute('src', card.img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

}

function checkScore () {
    score$$.textContent = cardsWon.length;
    attempts$$.textContent = Number(attempts$$.textContent) + 1;
    if (cardsWon.length === cardArray.length / 2) {
        score$$.textContent = '  Great, you won !';
    }
}

createBoard()
