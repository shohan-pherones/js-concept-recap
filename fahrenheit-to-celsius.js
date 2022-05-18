function fahrenheitToCelsius(temperature) {
  let celcius = (temperature - 32) * (5 / 9);
  return celcius;
}

let myTemperature = 86;
const celciusValue = fahrenheitToCelsius(myTemperature);
console.log(celciusValue);
