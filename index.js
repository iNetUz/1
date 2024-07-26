const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const button = document.getElementById("result");

function qoshish() {
    const result = Number(number1.value) + Number(number2.value);
    button.innerHTML = result;
}
function bolish() {
    const result = Number(number1.value) / Number(number2.value);
    button.innerHTML = result;
}
function kopaytirish() {
    const result = Number(number1.value) * Number(number2.value);
    button.innerHTML = result;
}
function ayirish() {
    const result = Number(number1.value) - Number(number2.value);
    button.innerHTML = result;
}