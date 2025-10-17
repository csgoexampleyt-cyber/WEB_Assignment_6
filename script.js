console.log("Name: Arlan Tulegenov, Group: SE-2429");
alert("Hello, JavaScript World!");

let name = "Arlan";
let age = 19;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is student?", isStudent);

let a = 10, b = 3;
console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Quotient:", a / b);

let greeting = "Hello, " + name + "! You are " + age + " years old.";
console.log(greeting);

function changeText() {
  document.getElementById("myParagraph").textContent = "Text changes!";
}

function changeColor() {
  document.getElementById("changeBox").style.backgroundColor = "lightgreen";
}

function changeFont() {
  document.getElementById("changeBox").style.fontSize = "24px";
}

function addItem() {
  const list = document.getElementById("itemList");
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(newItem);
}

function removeItem() {
  const list = document.getElementById("itemList");
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}

const colorBox = document.getElementById("colorBox");
colorBox.addEventListener("mouseover", () => {
  colorBox.style.backgroundColor = "orange";
});
colorBox.addEventListener("mouseout", () => {
  colorBox.style.backgroundColor = "lightblue";
});

const textInput = document.getElementById("textInput");
const displayValue = document.getElementById("displayValue");
textInput.addEventListener("keyup", () => {
  displayValue.textContent = textInput.value;
});

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers!");
    return;
  }

  switch (operation) {
    case "add": result = num1 + num2; break;
    case "sub": result = num1 - num2; break;
    case "mul": result = num1 * num2; break;
    case "div": result = num2 !== 0 ? num1 / num2 : "Error (÷0)"; break;
  }

  document.getElementById("calcResult").textContent = result;
}