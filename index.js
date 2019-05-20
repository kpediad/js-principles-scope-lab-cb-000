// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  let str = customerName.toUppercase();
  customerName = str;
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Dick';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'not Dick';
}
