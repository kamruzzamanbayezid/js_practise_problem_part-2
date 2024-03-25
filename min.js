function cheapest(arr) {
      let cheapest = arr[0];

      for (let element of arr) {
            if (element < cheapest) {
                  cheapest = element;
            }
      }

      return cheapest;
}

const arr = [100, 20000, 12000, 23500, 50000];
// console.log('Cheapest price is:', cheapest(arr));

// Find the lowest number in the array below.

function findLowestNumber(arr) {

      // validation
      if (!Array.isArray(arr)) {
            return 'Input should be an array!!';
      }

      else {
            let lowestNumber = arr[0];

            for (let number of arr) {
                  
                  // validation
                  if (typeof number !== 'number') {
                        return 'Array element should have number!'
                  }
                  else {
                        if (number < lowestNumber) {
                              lowestNumber = number;
                        }
                  }
            }
            return lowestNumber;
      }
}

const heights2 = [7, 10, 120, 165, 137];
console.log('Lowest number of the array is:', findLowestNumber(heights2));