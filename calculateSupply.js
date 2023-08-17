'use strict'

const maxAge = 80
const calculateSupply = (age, amountPerDay) => {
  let lifeTimeSupply = (maxAge - age) * amountPerDay
  return lifeTimeSupply
}

let lifeTimeSupply = calculateSupply(20, 0.2)

console.log(`You will need ${Math.trunc(lifeTimeSupply)} to last you until the ripe old age of ${maxAge}`);
