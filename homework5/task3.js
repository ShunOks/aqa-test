function checkOrder(available = 0, order = 0) {
  if (available < order) {
    return 'Your order is too large, we don\'t have enough goods ';
  }
  if (order === 0) {
    return 'Your order is empty';
  }
  if (available >= order) {
    return 'Your order is accepted';
  }
}

const a = parseInt(Math.random() * 100);
const b = parseInt(Math.random() * 100);

console.log(a, ' - available', b, ' - order');
console.log(checkOrder(a, b));
