// Ana to vori => gold
// 16 ana = 1 vori
// ana/16

function anaToVori(ana) {

      if (typeof ana !== 'number' || ana < 0) {
            return 'Invalid Input'
      }

      else {
            const oneVori = 16;
            const result = (1 * ana) / oneVori;
            return result;
      }
}

// console.log(anaToVori(10));

/**
 * function name pandaCost
 * 1 singara = 7 tk
 * 1 somuch = 10 tk
 * 1 jilapi = 15 tk
 * 
 * ekhon se jodi vibinno takar item kine tahole koto tk khoroch hobe
 */

function pandaCost(singara, somucha, jilapi) {

      if (typeof singara !== 'number' || typeof somucha !== 'number' || typeof jilapi !== 'number') {
            return 'Input must be a number!';
      }
      else if (singara < 0 || somucha < 0 || jilapi < 0) {
            return 'Input must be a positive number!';
      }
      else {
            const one_singara = 7;
            const one_somucha = 10;
            const one_jilapi = 15;

            const singaraCost = one_singara * singara;
            const somuchaCost = one_somucha * somucha;
            const jilapiCost = one_jilapi * jilapi;

            const total_cost = singaraCost + somuchaCost + jilapiCost;
            return total_cost;
      }

}

const result = pandaCost(1, 2, 1);
// console.log('Total Panda cost:', result);

/**
 * function name => picnicBudget
 * less than 100 hole per person 5000tk
 * 101-200 hole: 
 *    first 100 = 5000tk
 *    second 100 = 4000tl
 * 200plus hole:
 *    first 100 = 5000tk
 *    second 100 = 4000tl
 *    rest = 3000tk kore
 */

function picnicBudget(person) {

      if (typeof person !== 'number' || person < 0) {
            return 'Input should be a positive number'
      }

      else {
            const first100Cost = 5000;
            const second100Cost = 4000;
            const remainingCost = 3000;

            if (person <= 100) {
                  return person * first100Cost;
            }
            else if (person <= 200) {
                  const result = ((person - 100) * second100Cost) + (100 * first100Cost);
                  return result;
            }
            else if (person > 200) {
                  const result = ((person - 200) * remainingCost) + (100 * first100Cost) + (100 * second100Cost);
                  return result;
            }
      }
}

console.log(picnicBudget(202));