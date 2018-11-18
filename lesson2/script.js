let money = +prompt('Введите бюджет на месяц', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};

for (let i = 0; i < 2; i++) {
  let expense = prompt('Введите обязательную статью расходов в этом месяце', ''),
      cost = prompt('Во сколько это обойдется?', '');

  if  (isNaN(expense) && !isNaN(cost) && expense != null && cost != null
        && expense != '' && cost != '' && expense.length < 50 ) {
          console.log("done");
         appData.expenses[expense] = cost;
  } else {
    alert('Something went wrong! Please try again.');
    i--;
  }
};



/* let count = 0;

while (count < 2) {
  let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      b = prompt('Во сколько это обойдется?', '');

  if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
      && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
        count++;

      } else {
        alert('Something went wrong! Please try again.');
      }

}  */


/* let count = 0;
do {
  let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
  b = prompt('Во сколько это обойдется?', '');

if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
  && a != '' && b != '' && a.length < 50) {
    console.log('done');
    appData.expenses[a] = b;
    count++;

  } else {
    alert('Something went wrong! Please try again.');
  }

} while (count < 2); */









appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay) {
  console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
  console.log('Высокий уровень достатка');
} else {
  console.log();
}

