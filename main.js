console.log("Hello World!")

function sayHello() {
  document.write("Hello User!")
}
sayHello()

let x1= document.getElementsByClassName("header1")[0]
console.log(x1)

// var num = 1;
// while (num <= 30) {
// console.log(num)
// num++
// }

let answer = prompt("How are you doing?").toLowerCase()
goodWords = ['good', 'well', 'nice', 'fair', 'yer']
badWords = ['sad', 'bad', 'meh', 'i fought roy']

function doingWell(answer) {
  if(goodWords.includes(answer)) {
    return true
  }
}

function notDoingWell(answer) {
  if(badWords.includes(answer)) {
    return true
  }
}

if (doingWell(answer)) {
  console.log("That's great!")
  let answer2 = prompt("Where are you from?").toLowerCase()
  if (answer2 == "New York") {
    console.log("Cool, me too!")
  }
} else if (notDoingWell(answer)) {

} else {
  console.log("I'm sorry to hear that.")
}
