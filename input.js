var buttons = document.getElementsByClassName("btn");

var display = document.getElementById("display");

var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
  display.innerText = "";
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    var text = display.textContent.trim();
    if (value === "+") {
      operator = "+";
      operand1 = parseFloat(text);
      display.innerText = "";
    } else if (value === "=") {
      // use display.textContent or
      // display.innerText
      //we need to parse it to get number out of it
      operand2 = parseFloat(text);
      console.log("operand2", operand2);
      // use eval to get result
      console.log("operand1", operand1);
      console.log("operator", operator);
      var result = eval(operand1 + " " + operator + " " + operand2);

      // if (op1 != 0 && op2 == 0) {
      //   result = "Error";
      //   display.innerText = result;
      // }

      console.log("result", result);

      // Show result on display

      display.innerText = result;
      console.log("display.innerText", display.innerText);
    } else if (value === "AC") {
      display.innerText = "";
    } else if (value === "+/-") {
      display.innerText = display.innerText * -1;
      operand1 = display.innerText;
    } else if (value === "%") {
      operator = "%";
      operand1 = parseFloat(text) / 10;
      console.log("operand1", operand1);
      console.log("display.innerText", display.innerText);
      display.innerText = "";
    } else if (value === "/") {
      operator = "/";
      operand1 = parseFloat(text);
      display.innerText = "";
    } else if (value === "*") {
      operator = "*";
      operand1 = parseFloat(text);
      display.innerText = "";
    } else if (value === "-") {
      operator = "-";
      operand1 = parseFloat(text);
      display.innerText = "";
    } else if (value === ".") {
      // operator = ".";
      // operand1 = parseFloat(text) / 10;

      display.textContent += ".";
    } else {
      display.innerText += value;
      console.log("display.innerText", display.innerText);
    }
  });
}
