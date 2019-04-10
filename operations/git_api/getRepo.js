//Takes a username as an argument and makes a call to GitHub API
//and returns all the repositoriesowned by the user as an array.
const { getCustomer } = require("./db");

module.exports.applyDiscount = function(order) {
  const customer = getCustomer(order.customerId);

  customer.points > 10 ? (order.totalPrice *= 0.9) : false;
};
