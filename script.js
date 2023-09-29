calculation = localStorage.getItem('calculation') || '';
const buttonOperation = document.querySelectorAll('.js-operation');
const buttonOperator = document.querySelectorAll('.js-operator');
const buttonResult = document.querySelector('.js-result-button');
const buttonReset = document.querySelector(('.js-clear-button'));
displayCalculation();
calculation = " ";
function updateCalculation(val) {

  calculation += val;
  displayCalculation();
  saveCalculation();
}
function resultCalculation() {
  localStorage.getItem('calculation', calculation);
  calculation = eval(calculation);
  displayCalculation();
  saveCalculation();
  calculation = '';
}
function resetCalculation() {
  saveCalculation();
  calculation = '';
  displayCalculation();
}
function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}
function displayCalculation() {

  document.querySelector('.calculation').innerHTML = calculation;
}

buttonOperation.forEach(element => {
  element.addEventListener('click', () => updateCalculation(element.innerHTML));
});
buttonOperator.forEach(element => {
  element.addEventListener('click', () => updateCalculation(element.innerHTML));
});
buttonResult.addEventListener('click', () => resultCalculation());

buttonReset.addEventListener('click', () => resetCalculation());

