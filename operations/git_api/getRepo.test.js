const getRepo = require("./getRepo");
const db = require("./db");

let showGitHubUser = require("./getRepo");

// describe("Testing Mock....", () => {
//   it("Should apply discount to total", () => {
//     db.getCustomer = function(customerId) {
//       console.log("Getting data from fake database");
//       return { id: customerId, points: 20 };
//     };

//     const order = { customerId: 1, totalPrice: 10 };
//     getRepo.applyDiscount(order);

//     expect(order.totalPrice).toBe(9);
//   });
// });

// describe("Mock testing getRepo implementation", () => {
//   it("Make sure fetchRepo function is callled", () => {
//     const handle = "iKnowJavaScript";
//     showGitHubUser = jest
//       .fn(handle)
//       .mockResolvedValue([
//         "Ball-Bouncing-and-Collision",
//         "css-grid",
//         "CSS-Grid-Calculator",
//         "CSS-Grid-Phone",
//         "css-protips",
//         "Databaseless-API"
//       ]);

//     expect(showGitHubUser).toHaveBeenCalledWith(handle);
//   });
//   it("Should make sure an array of repo was return", () => {});
//   it("Should return 'User has not repository yet' if it return an empty array", () => {});
//   it("Should return 'User not found' if no array was returned", () => {});
// });
