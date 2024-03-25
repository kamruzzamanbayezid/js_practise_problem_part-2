const products = [
      { name: 'pant', price: 100, quantity: 2 },
      { name: 'Shampoo', price: 300, quantity: 3 },
      { name: 'shirt', price: 700, quantity: 5 },
      { name: 'chiruni', price: 1200, quantity: 1 }
];

function total_cost(products) {
      let totalCost = 0;

      for (let product of products) {
            totalCost = totalCost + (product.price * product.quantity)
      }
      return totalCost;

}

console.log('Total Shopping Cost', total_cost(products));