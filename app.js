function myFunction(x) {
    x.classList.toggle("change");
}

let num = document.getElementById('num');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let result = document.getElementById('result');

number = (parseInt(num.textContent)) + (parseInt(num1.textContent)) + (parseInt(num2.textContent))
console.log(number)

result.innerHTML = number
