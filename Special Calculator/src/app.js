// Progression 1: Create special addition
let x = specialAddition();

function specialAddition(numberOne, numberTwo) {
  return numberOne < 0 | numberTwo < 0 ? "Negative numbers are not allowed" : numberOne - numberTwo;
}

// Progression 2: Create simple division
let y = simpleDivision();

function simpleDivision(numberOne, numberTwo) {
  return numberTwo==0 ? "Not a number" : numberTwo<0 | numberOne<0 ? "Negative numbers are not allowed" : numberTwo>numberOne ? "Cannot divide a smaller number from a larger number" : numberOne / numberTwo;
}

// Progression 3: Create the special calculator
function specialCalculator(numberOne, numberTwo, operation) {
  return operation(numberOne, numberTwo);
}
