'use strict'

let arr = []
let i
const range = (start, end) => {
  for (i = start; i <= end; i++){
    arr.push(i)
  }
  console.log(arr);
}

range(1,100)
