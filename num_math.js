//properties function : toString, toFixed, toprecision,toLocalString
//'javaScript has only one type of number. Numbers can be written with or without decimals.
const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));

const hundres = 1000000
console.log(hundres.toLocaleString('en-IN'));

// ++++++++++++++++++Maths++++++++++++++++++++++++++++
//The Math namespace object contains static properties and methods for mathematical constants and functions.
//Math works with the Number type. It doesn't work with BigInt
/*Unlike most global objects, Math is not a constructor. 
You cannot use it with the new operator or invoke the Math object as a function.
 All properties and methods of Math are static. */
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//nonconsole.log(math);
console.log(Math.abs(-4));
console.log(Math.round(4,6));
console.log(Math.round(4,.2));
//function abs,round,ceil(top),floor(down),sqrt(),power(),min(),max()
//
console.log(Math.random());
//math.random()value comes under 0 and 1
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.random()*(max-min+1)+min)
