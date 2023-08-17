'use strict'

let degreeFahrenheit = 32;
const fahrenheitToCelsius = () => {
  return 5 * (degreeFahrenheit - 32) / 9
}

let degreeCelcius = fahrenheitToCelsius()
console.log(`${degreeFahrenheit}°F is ${degreeCelcius}°C`);
