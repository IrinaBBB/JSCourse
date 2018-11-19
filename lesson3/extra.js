// сделать так, чтобы "урок" начинался с большой буквы

let str = "урок-3-был слишком легким";
    str = str[0].toUpperCase()+ str.slice(1);

console.log(str);

// все “-” на пробелы

str = str.replace(/-/g, " ");
console.log(str);

// строки вырезать слово “легким”, в этом же слове 
//заменить 2 последние буквы на букву “о”

/* str = str.replace("легким", "");
console.log(str); */

str = str.slice(19);
console.log(str);

str = str.slice(0,4);
str += "оо";

console.log(str);

//  Вывести в консоль квадратный корень из суммы кубов элементов 

let arr = [20, 33, 1, 'Человек', 2, 3];

let sumCubes = 0;

for(let i = 0; i < arr.length; i++) {
  if (!isNaN(arr[i])) {
    sumCubes += (arr[i] ** 3);
  }
}

console.log(sumCubes ** 0.5);

function trimMyString(string) {
  if (!isNaN(string)){
    alert("Your input is not a string!");
    return false;
  } else if(string.length > 50) {
    return trim(string).substring(0, 51) + '...';
  } else {
    return string.trim();
  }
  
}











