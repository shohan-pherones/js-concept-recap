function celsiusToFahrenheit(temperature) {
  let fahrenheit = temperature * 1.8 + 32;
  return fahrenheit;
}

let myTemperature = 10;
const fahrenheitValue = celsiusToFahrenheit(myTemperature);
console.log(fahrenheitValue);
