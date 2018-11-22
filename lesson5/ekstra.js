//console.log(today.toLocaleString("ru-RU"));
//console.log(today.toLocaleDateString("ru-RU"));




function getTodaysDate() {
  let date = new Date(),
    dateString = '';
  dateString += (setZero(date.getHours()) + ':' + setZero(date.getMinutes()) + ':' + setZero(date.getSeconds()));
  dateString += ' ';
  dateString += (setZero(date.getDate()) + '.' + setZero(date.getMonth()) + '.' + date.getFullYear());

  return dateString;

}

document.body.innerHTML += '<b>' + getTodaysDate() + '</b><br>';
document.body.innerHTML += '<b>' + getTodaysDay() + '</b><br>';


function setZero(number) {
  if (number >= 0 && number < 10) {
    return '0' + number;
  } else {
    return number;
  }

}
// join() split()
function setZeroDate(date) {

  date = date.split('.');

  for (let i = 0; i < date.length; i++) {
    if (date[i] >= 0 && date[i] < 10) {
      let number = date[i];
      date[i] = '0' + number;
    }
  }

  return date.join('.');

}

console.log(setZeroDate('1.6.2018'));


function getTodaysDay() {

  let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    date = new Date();

  return days[date.getDay()];


}

function getDaysBetweenDates() {
  let date1 = document.getElementById('date_1').value,
      date2 = document.getElementById('date_2').value,
      date1Obj = new Date(date1),
      date2Obj = new Date(date2),
      difference = (Date.parse(date1) - Date.parse(date2)) / 1000 / 86400;
      
      if (difference < 0) {
        document.getElementById('answer').value += Math.floor(difference) * (- 1);
      } else {
        document.getElementById('answer').value += Math.floor(difference);

      }

  
}









