function maxNumber(num_1, num_2, num_3) {

      if (num_1 > num_2) {
            if (num_1 > num_3) {
                  return num_1;
            }
      }

      else {
            if (num_2 > num_1) {
                  if (num_2 > num_3) {
                        return num_2;
                  }
            }
      }

      return num_3;
}

const max = maxNumber(1002, 202, 5006);
// console.log('big big', max);

// option 2
function findBig(num_1, num_2, num_3) {

      if (num_1 > num_2 && num_1 > num_3) {
            return num_1;
      }
      else if (num_2 > num_3) {
            return num_2;
      }
      else {
            return num_3;
      }
}

const findMax = maxNumber(10, 52, 98);
// console.log('big big', findMax);


const maximum = Math.max(12, 55, 63, 85, 7, 5);
// console.log(maximum);

const arr = [12, 45, 66, 33, 55, 74]
// console.log(Math.max.apply(null, arr));

function max_number(arr) {

      // validation
      if (!Array.isArray(arr)) {
            return 'Please provide an array!'
      }

      let max_number = arr[0];
      for (let number of arr) {
            if (typeof number !== 'number') {
                  return 'Arrays should have number element'
            }

            else {
                  if (number > max_number) {
                        max_number = number;
                  }
            }
      }
      return max_number;

};

console.log('Maximum number of the arr is:', max_number([1, "5", 3, 6, 7]));