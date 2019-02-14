var moment = require('moment');
var math = require('mathjs');

var myDate = moment().startOf('day').fromNow();
console.log(myDate);

console.log(math.sqrt(-4));