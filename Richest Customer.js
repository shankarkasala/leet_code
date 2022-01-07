var maximumWealth = function (accounts) {
  return Math.max(...accounts.map((y) => y.reduce((a, b) => a + b), 0));
};

// const x = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// const a = x.map((y) => y.reduce((a, b) => a + b));
// const b = x.reduce((a, b) => a.map((v, i) => v + b[i]));
// const c = x.flat().reduce((a , b) => a + b)

// console.log('Summing horizontally: '  + JSON.stringify(a));
// console.log('Summing vertically: ' + JSON.stringify(b));
// console.log('Summing whole array: ' + JSON.stringify(c));
