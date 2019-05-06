// write a function that takes in an array as an Argument

// sort the array by looping over each item in the array

// check that the number to the right is greater than the number you're on
  // if number = greater, swap the 2 numbers in that array

// check that the number to the right is less than the number you're on

// perform this check for each item in the array

var num = [1, 5, 3, 9, 2, 6, 4, 8, 7, 10]

array = () => {
  for(i = 0; i < num.length - 1; i++) {
    if(num[i] < num[i+1]) {
      [num[i], num[i+1]] = [num[i+1], num[i]]
      i++
    } else {

      i++a
      return num
    }
  }
}
