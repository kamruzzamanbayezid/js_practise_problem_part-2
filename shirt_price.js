
function total_cost(shirt, pant, shoe) {

      const shirtPrice = 5;
      const pantPrice = 9;
      const shoePrice = 3;

      const totalCostForShirt = shirtPrice * shirt;
      const totalCostForPant = pantPrice * pant;
      const totalCostForShoe = shoePrice * shoe;

      const totalCost = totalCostForPant + totalCostForShirt + totalCostForShoe;

      return totalCost;

}


console.log('Total Cost:', total_cost(6, 5, 1));