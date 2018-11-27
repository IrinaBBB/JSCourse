// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', function() {
  let box = document.getElementsByClassName('red-box')[0];

  box.addEventListener('touchstart', function(e) {
    e.preventDefault();
    console.log(e.touches[0].target);
   /*  console.log(e.touches);
    console.log(e.changedTouches);
    console.log(e.targetTouches);
     */
  }); 

 /*  box.addEventListener('touchmove', function(e) {
    e.preventDefault();
    console.log('Red box: ' + e.changedTouches[0].pageX);
    
  }); 

  box.addEventListener('touchend', function(e) {
    e.preventDefault();
    console.log('end');
    
  });  */
});


//new RegExp('pattern', 'flags');
// /pattern/flag

/* let ans = prompt('Введите ваще имя'),
    reg = /n/ig;

    //  i g m

console.log(ans.search(reg));
console.log(ans.match(reg)); */


/* let pass = prompt('Введите свой пароль');
console.log(pass.replace(/./g, '*')); */

/* let ans = prompt('Введите ваше имя');
reg = /n/ig;

console.log(reg.test(ans)); */

// классы регулярных выражений

// \w \d \s слова цифры пробелы
// \W \D \S не слова, не цифры, не пробелы
/* 
let ans = prompt('Введите ваше число'),
str = 'My name is R2D2',
    reg = /\D/g;


    console.log(str.match(/\w\d\w\d/)); */

console.log(str.match(/\^/));