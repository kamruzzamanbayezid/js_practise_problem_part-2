const phones = [
      { brand: 'smasung', price: 25000, color: 'red', camera: '25mp' },
      { brand: 'xiaomi', price: 10000, color: 'green', camera: '16mp' },
      { brand: 'oppo', price: 5000, color: 'yellow', camera: '15mp' },
      { brand: 'nokia', price: 22000, color: 'blue', camera: '26mp' },
      { brand: 'walton', price: 15000, color: 'red', camera: '10mp' }
];

function cheapest_price(phones) {

      let cheapestPhonePrice = phones[0].price;
      let cheapestPhone = phones[0];

      for (let phone of phones) {

            if (phone.price < cheapestPhonePrice) {
                  cheapestPhonePrice = phone.price;
                  cheapestPhone = phone;
            }
      }
      return cheapestPhone;
}

const result = cheapest_price(phones);
console.log('Cheapest phone is:', result);