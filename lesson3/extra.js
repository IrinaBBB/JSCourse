// сделать так, чтобы "урок" начинался с большой буквы

let str = "урок-3-был слишком легким",
    str1 = '';

for (let i = 0; i < str.length; i++) {
  if (i == 0) {
    str1 += str[i].toUpperCase();
  } else {
    str1 += str[i];
  }
}
console.log(str1);

// все “-” на пробелы

let str2 = str1.replace(/-/g, " ");
console.log(str2);


// строки вырезать слово “легким”, в этом же слове 
//заменить 2 последние буквы на букву “о”

let str3 = str2.replace("легким", "");
console.log(str3);

let str4 = str2.substring(19);
console.log(str4);

let str5 = '';

for (let i = 0; i < str4.length; i++) {
  if (i == str4.length - 1 || i == str4.length - 2) {
    str5 += "о";
  } else {
    str5 += str4[i];
  }
 }

 console.log(str5);

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
    return trim(string.substring(0, 51) + '...');
  } else {
    return string.trim();
  }
  



}











