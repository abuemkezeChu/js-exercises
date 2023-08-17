'use strict'

let degreeCelcius = 25;
const celsiusToFahrenheit = () => {
  return (degreeCelcius * 1.8) + 32
}

let degreeFahrenheit = celsiusToFahrenheit()
console.log(`${degreeCelcius}°C is ${degreeFahrenheit}°F`);
