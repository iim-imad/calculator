const display = document.querySelector('.text');
const input = document.querySelector('.input');
const nums = document.querySelectorAll('.nums');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equals');


const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const operate = (a, b, operator) => {
   switch (operator) {
      case '+':
         return add(a, b);
      case '-':
         return substract(a, b);
      case 'x':
         return multiply(a, b);
      case '/':
         return divide(a, b);
      default:
         return;
   }
};

let operator = ''

nums.forEach(num => {
   num.addEventListener('click', function () {
      display.textContent += num.textContent
      let firstInput = display.textContent
      console.log(firstInput)
      let secondInput = display.textContent
      console.log(secondInput)

      operators.forEach(opr => {
         opr.addEventListener('click', function () {
            input.textContent = firstInput
            console.log(input.textContent)
            display.textContent = ''

            equalSign.addEventListener('click', function () {
               let result = operate(firstInput, secondInput, operator)
               display.textContent = result
            })
         })
      })
   })
})




