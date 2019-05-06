// create an algorithm simulates a running train
// The train will print out a message at every stop
  // -->"this stop is..."
// if the stop is the same as the rider's destination
// get off train
  // -->"leaving train"

// The train simulation should hit every stop at 3 second intervals

// write a for loop that prints out every item in that for a
// we have items in an array
// for every item in that array
  // create a button
  // button innerText = the item of that array
  //display on screen

let STOPS = ['8th ave', '6th ave', '14th St union square', '3rd ave', '1st ave', 'bedford ave', 'lorimer st', 'graham ave', 'grand st', 'montrose ave', 'morgan ave']
let dest = prompt("What is your destination?").toLowerCase()
let div = document.querySelector("#stops")

for (stop of STOPS) {
  console.log(stop)
  if (dest == stop) {
      console.log("LEAVING TRAIN")
      break
    }
  }

 for (stop of STOPS) {
   let el = document.createElement("button")
   el.innerText = stop
   div.appendChild(el)
 }
