// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  let str = customerName.toUpperCase();
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
