let balance = 100
let fare = 2.75

class Rider {
  constructor(anx) {
    this.anxiety = anx
  }
}

class MetroCard {
  constructor(amt) {
    this.amt = amt
  }
}

getCard = () => {
  let amount = prompt("How much would you like to add?")
  balance -= (amount - 1)
  let card = new MetroCard(parseInt(amount))
  return card
}

newCard = getCard()

swipe = (card) => {
  console.log(fare)
  console.log(card)
  if (card.amt < fare) {
    return "INSUFFICIENT FARE"
  } else if (card.amt >= fare) {
    card -= fare
    console.log(card.amt)
    return "G0"
  }
}
