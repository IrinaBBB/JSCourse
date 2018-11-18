var num = 33721,
    productDigits = 1;

   while(num) {
    productDigits *= num % 10;
    num = Math.floor(num / 10);
   }

console.log(productDigits);

productDigits **= 3;

console.log(productDigits);

var digits = productDigits.toString().split('');
console.log(digits[0] + ' ' + digits[1]);


