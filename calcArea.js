'use strict'

const calcArea = (radius) => {
  let area = Math.PI * radius * radius
  return area
}

let area = calcArea(2)
console.log(`The area is ${area}`);
