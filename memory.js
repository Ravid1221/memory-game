const cardsArr = [
    {
        imgSrc: 'photo/chips.jpg'
    },
    {
        imgSrc: 'photo/chips.jpg'
    },
    {
        imgSrc: 'photo/fricase.jpg'
    },
    {
        imgSrc: 'photo/fricase.jpg'
    },
    {
        imgSrc: 'photo/hamburger.jpg'
    },
    {
        imgSrc: 'photo/hamburger.jpg'
    },
    {
        imgSrc: 'photo/pizza.jpg'
    },
    {
        imgSrc: 'photo/pizza.jpg'
    },
    {
        imgSrc: 'photo/stake.jpg'
    },
    {
        imgSrc: 'photo/stake.jpg'
    },
    {
        imgSrc: 'photo/susgi.png'
    },
    {
        imgSrc: 'photo/susgi.png'
    }
]

const main = document.querySelector(".main-container")

let selectedCards = []

for(let i = 0; i < cardsArr.length; i++){
    const newCard = document.createElement('img')
    newCard.classList.add('coveredCard')
    newCard.id = i
    newCard.addEventListener('click', flipCard)
    main.appendChild(newCard)
}

function flipCard(){
    let cardId = this.id
    this.setAttribute('src', cardsArr[cardId].imgSrc)
    let img = cardsArr[cardId].imgSrc
    this.classList.add('myCard')
    selectedCards.push(img)
    console.log(selectedCards)
    if(selectedCards.length == 2){
        checkMatch()
    }
}

function checkMatch(){
    if(selectedCards[0] == selectedCards[1]){
        console.log('Match')
    }
    else{
        console.log('No match')
    }
    selectedCards = []
}