'use strict'

let result = 0
const sum = (arr) => {
  arr.forEach(element => {
    result = result + element
  });
  return result
}

const ans = sum([1,2,3,2])
console.log(ans);
