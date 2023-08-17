'use strict'

const min = (num1, num2) => {
  if (num1 > num2) {
    return num1
  }
  return num2
}

let number = min(2,4)
console.log(number);
