function simpleInterest(principal, interestRate, years) {
  const finalAmount = principal * (1 + interestRate * years);
  return finalAmount;
}

let myPrincipal = 1200;
let interestPercentage = 7;
let myYears = 3;
const myInterestRate = interestPercentage / 100;
const totalAmount = simpleInterest(myPrincipal, myInterestRate, myYears);
console.log(totalAmount);
