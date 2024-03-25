/***
 * upto --> 100 ta kinle => 100 tk kore
 * upto --> 101-200 ta kinle => 90 tk kore
 * upto --> 200+ kinle => 70 tk kore
 * Discount (%) = (Discount/List Price) × 100
 */

function ticket_price(ticketQuantity) {

      if (ticketQuantity <= 100) {
            const ticketPrice = ticketQuantity * 100;
            return ticketPrice;
      }
      else if (ticketQuantity > 100 && ticketQuantity < 200) {
            const ticketPrice = ticketQuantity * 90;
            return ticketPrice;
      }
      else {
            const ticketPrice = ticketQuantity * 70;
            return ticketPrice;
      }
}

const ticketCost = ticket_price(201);
console.log(ticketCost);