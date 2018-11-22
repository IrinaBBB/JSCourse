let obj = {
  'name': 'Alex'
}

let arr = ['Alex', 'Ivan', 'Semen '];

// динамическая типизация

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
/* console.log('qweqwe' + 5);
console.log(typeof(5 + '')); */

let number = 5;
console.log('http://vk.com/name' + number);

// как превратить любой тип данных в число
// 1)
console.log(typeof(Number('sddsd')));
console.log(Number('sddsd'));
// 2)
console.log(typeof(+'asdas'));
//let ans = +prompt('sdf', '');
// 3)

console.log(parseFloat('4DF'));

// булиновые значения : всегда false 0, '', null, undefined, NaN ('dsdsd'/3)
// 1)
let switcher = null;
if (switcher) {
  alert();
}

switcher = 1;
/* if (switcher) {
  alert();
} */

// 2)

console.log(typeof(Boolean('sdfdsf')));
console.log(Boolean('sd'));
// 3)
console.log(typeof(!!'sdfs'));

// function declaration работает точно также как и var
// пустой массив в javaScript - это пустая строка
console.log([] + 1 + 2);
console.log(null || 2 && 3 || 4);
console.log(2 && 1 && undefined && 0 && null);

console.log("ёжик" > "яблоко");
// || возвращает первую правду, он запинается всегда на правде
// && возвращает первую ложь
























