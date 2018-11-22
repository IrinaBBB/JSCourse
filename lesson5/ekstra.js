

//console.log(today.toLocaleString("ru-RU"));
//console.log(today.toLocaleDateString("ru-RU"));


let now = new Date(),
    date = new Date('2017.10.11 10:56:20'),
    date1 = new Date('2017.11.11 10:56:20')
    dateString = now.getTime();
    
    console.log(now.getMinutes());
    console.log((Date.parse(date) - Date.parse(date1)) / 1000 / 86400);






function getTodaysDay() {
  
  let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
      date = new Date();

      return days[date.getDay()];

  
}


console.log(getTodaysDay());

function getDaysDifference(date1, date2)