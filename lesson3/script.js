let money, time;


function start() {
    money = +prompt('Введите бюджет на месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money) || money == '' || money == null) {
    money = +prompt('Введите бюджет на месяц', '');

    }
}

start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true
};

function chooseExpenses() {
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
  }
}

chooseExpenses();

function detectDayBudget() {

  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert('Ежедневный бюджет: ' + appData.moneyPerDay);

}

detectDayBudget();

function detectLevel() {

  if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay) {
    console.log('Средний уровень достатка');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
  } else {
    console.log();
  }

}

detectLevel();
function optionalExpenses() {
  for (let i = 0; i < 3; i++) {
    let expense = prompt('Статья необязательных расходов?', '');
      if (isNaN(expense) && expense != null && expense != '' && expense.length < 50) {
        console.log("done");
        appData.optionalExpenses[i + 1] = expense;
      } else {
        alert('Something went wrong! Please try again.');
        i--;
      }
  }
}

optionalExpenses();


function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt('Какова сумма накоплений?'),
        percent = +prompt('Под какой процент?');

        appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
  }
}

checkSavings();
