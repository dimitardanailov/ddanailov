const BigNumber = require('bignumber.js');

let x = new BigNumber('50.05');
let y = new BigNumber(50);
let z = x.plus(y);

console.log(z.toNumber());