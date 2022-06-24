const num1 = prompt("Enter Your First Value");
const num2 = prompt("Enter Your Second Value");
const operatorNum = prompt("Enter the operator that you wish to use (*, -, +, / )");


let result;
if (operatorNum == "*") {
  result = num1 * num2;
}
  else if (operatorNum == "-") {
  result = num1 - num2;
  }
  else if (operatorNum == "/") {
  result = num1 / num2;
  } 
  else if (operatorNum == "+") {
  result = parseInt(num1) + parseInt(num2);
  } 
else {
  alert("Invalid Operator");
}

alert("The result is : " + result);