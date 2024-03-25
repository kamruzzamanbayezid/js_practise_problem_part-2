// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
      { model: "PhoneA", brand: "Iphone", price: 95000 },
      { model: "PhoneB", brand: "Samsung", price: 40000 },
      { model: "PhoneC", brand: "Oppo", price: 26000 },
      { model: "PhoneD", brand: "Nokia", price: 35000 },
      { model: "PhoneE", brand: "Iphone", price: 105000 },
      { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(obj) {
      if (!Array.isArray(obj)) {
            return "Input should be an array!!"
      }
      else if (obj.length === 0) {
            return 0;
      }
      else {
            let total = 0;

            for (let phone of obj) {
                  total += phone.price;
            }
            const average = total / obj.length;
            return average;
      }

}

console.log('Average price of phones is:', findAveragePhonePrice(phones));

