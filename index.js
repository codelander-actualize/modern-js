// var moment = require('moment');
import * as moment from 'moment';
import * as math from 'mathjs';

var myDate = moment().startOf('day').fromNow();
console.log(myDate);
console.log(math.sqrt(-4));

var name = "Bob";
console.log(`Hello ${name}, how are you ${myDate}?`);