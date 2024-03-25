// Find the friend with the smallest name.
function smallest_name(arr) {
      // validation
      if (!Array.isArray(arr)) {
            return 'Input should be an array!!';
      }
      else {

            let smallest_name = arr[0];

            for (let word of arr) {

                  // validation
                  if (typeof word !== 'string') {
                        return 'Array element should have string!'
                  }
                  else {
                        if (word.length < smallest_name.length) {
                              smallest_name = word;
                        }
                  }
            }
            return smallest_name;
      }
}

const arr = ['rahim', 'robin', 'rafi', 'on', 'rashed','a'];
console.log('Smallest name:', smallest_name(arr));