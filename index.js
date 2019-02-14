var moment = require('moment');

var myDate = moment().startOf('day').fromNow();
console.log(myDate);