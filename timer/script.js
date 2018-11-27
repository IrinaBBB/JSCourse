let timer = document.querySelector('.timer');


setInterval(getCurrentTime, 1000);





function getCurrentTime() {
  let date = new Date(),
    timeString = '';
    timeString += (setZero(date.getHours()) + ':' + setZero(date.getMinutes()) + ':' + setZero(date.getSeconds()));

  timer.textContent = timeString;
}

function setZero(number) {
  if (number >= 0 && number < 10) {
    return '0' + number;
  } else {
    return number;
  }

}