let fare = 2.75
let person = prompt("What is your name?")
let train = []

getCard = () => {
  let amount = prompt("How much would you like to add?")
  card = parseInt(amount)
}

swipe = () => {
  if (card < fare) {
    return "INSUFFICIENT FARE"
  } else if (card >= fare) {
    card -= fare
    train.push(person)
    return "G0"
  }
}

// create a card variable
// swipe the Card
// check to see if the card has enough FARE
// if yes, get on train
// if no, refill card
