const products = [
      { name: 'Shampoo', price: 300 },
      { name: 'pant', price: 100 },
      { name: 'shirt', price: 700 },
      { name: 'chiruni', price: 1200 }
];

function total_cost(products) {
      let totalCost = 0;

      for (let product of products) {
            totalCost += product.price;
      }
      return totalCost;
}

const result = total_cost(products);
// console.log('Total shopping cost:', result);


// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
function calculateElectronicsBudget(laptop, tablet, mobile) {

      // validation
      if (typeof laptop !== 'number' || typeof tablet !== 'number' || typeof mobile !== 'number') {
            return "Input should be a positive number!!"
      }
      else if (laptop < 0 || tablet < 0 || mobile < 0) {
            return "Input should be a positive number!"
      }
      else {

            // main part

            const laptopPrice = 35000;
            const tabletPrice = 15000;
            const mobilePrice = 20000;

            const totalCost = (laptopPrice * laptop) + (tabletPrice * tablet) + (mobilePrice * mobile);
            return totalCost;
      }
}

// console.log('Total cost:', calculateElectronicsBudget(1, 2, 2));


/**
 * For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
 */
const employees = [
      { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
      { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
      { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
      { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalSalary(employees) {
      if (!Array.isArray(employees)) {
            return "Inpur must be an array!"
      }
      else {

            let totalSalary = 0;

            for (let employee of employees) {
                  if (typeof employee !== 'object') {
                        return "Array element should be object"
                  }
                  else if (typeof employee.name === undefined || typeof employee.experience === undefined || typeof employee.starting === undefined || typeof employee.increment === undefined) {
                        return "Each element must have name, experience, starting, and increment properties!";
                  }
                  else {
                        const employeeSalary = employee.starting + (employee.experience * employee.increment);
                        totalSalary = totalSalary + employeeSalary;
                  }
            }
            return totalSalary;
      }
}

console.log('Total salary: ', totalSalary(employees));


