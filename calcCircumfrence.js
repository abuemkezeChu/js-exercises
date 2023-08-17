'use strict'

const calcCircumfrence = (radius) => {
  let circumfrence = 2 * Math.PI * radius
  return circumfrence
}

let ans = calcCircumfrence(12)
console.log(`The circumfrence is ${ans}`);