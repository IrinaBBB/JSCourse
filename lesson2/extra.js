let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

for (let i = 0; i < week.length; i++) {
  if ( i == 5 || i == 6 ) {
    document.body.innerHTML += week[i].toUpperCase() +'<br>';
  } else if ( i == 4) {
    document.body.innerHTML += week[i].italics() +'<br>';
  } else {
    document.body.innerHTML += week[i] +'<br>';
  }
}


let arr = [234324, 3345, 7034, 454646, 345345, 8090, 34535];

for (let j = 0; j < arr.length; j++) {
  let myDigit = arr[j].toString().split('');
  if (myDigit[0] == 3 || myDigit[0] == 7) {
    console.log(arr[j]);
  }

}