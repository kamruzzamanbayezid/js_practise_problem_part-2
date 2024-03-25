
// option 1
const heights = [65, 660, 68, 72, 78, 60];
const sort = heights.sort(function (a, b) { return a - b })
const tallest = sort[sort.length - 1]

// console.log(tallest);

// option 2
function tallestNumber(arr) {
      let tallest = arr[0];

      for (let number of arr) {
            if (number > tallest) {
                  tallest = number;
            }
      }
      return tallest;
}

const arr = [65, 10, 68, 72, 70, 6];
// console.log('Tallest number is:', tallestNumber(arr));


function smallestNumber(arr2) {
      let smallestNumber = arr2[0];

      for (let number of arr2) {
            if (number < smallestNumber) {
                  smallestNumber = number;
            }
      }
      return smallestNumber;
}

const arr2 = [65, 10, 68, 2, 70, 6];
console.log('Smallest number is:', smallestNumber(arr2));