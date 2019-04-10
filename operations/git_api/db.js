module.exports.getCustomer = function(id) {
  return { id: id, points: 12 };
};



let check = function(a,b,c) {
  console.log(arguments.length)
}
check(1,2)

console.log(1 < 2) //1 less than 2