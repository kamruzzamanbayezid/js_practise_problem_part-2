function add(num1, num2) {
      return num1 + num2;
}

function subtraction(num1, num2) {
      const result = Math.abs(num1 - num2);
      return result;
}

function multiply(num1, num2) {
      return num1 * num2;
}

function division(num1, num2) {
      return num1 / num2;
}

function calculator(a, b, operation) {
      if (operation === 'add') {
            const result = add(a, b);
            return result;
      }
      else if (operation === 'subtraction') {
            const result = subtraction(a, b);
            return result;
      }
      else if (operation === 'multiply') {
            const result = multiply(a, b);
            return result;
      }
      else if (operation === 'division') {
            const result = division(a, b);
            return result;
      }
      else {
            return " only 'add', 'subtraction', 'multiply' and 'division' operation are allowed";
      }
}

const result = calculator(5, 7, 'subtraction');
console.log('Output:', result);