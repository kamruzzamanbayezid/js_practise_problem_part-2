/**
 * first 100 ==> 100;
 * 101 to 200 ==> 90;
 * 200+ ==> 70;
 */

function layerDiscountedPrice(quantity) {
      const first_100_price = 100;
      const second_100_price = 90;
      const above_200_price = 70;

      if (quantity <= 100) {
            const totalPrice = quantity * 100;
            return totalPrice;
      }
      else if (quantity <= 200) {
            const first_100 = 100;
            const first100Price = first_100 * 100;

            const restQuantity = quantity - first_100;
            const restQuantityPrice = restQuantity * 90;

            const totalPrice = first100Price + restQuantityPrice;
            return totalPrice;
      }
      else {
            const first_100 = 100;
            const first100Price = first_100 * 100;

            const second_100 = 100;
            const second100Price = second_100 * 90;

            const restQuantity = quantity - (first_100 + second_100);
            const restQuantityPrice = restQuantity * 70;

            const totalPrice = first100Price + second100Price + restQuantityPrice;

            return totalPrice;
      }
}

const discountedPrice = layerDiscountedPrice(300);
console.log(discountedPrice);
