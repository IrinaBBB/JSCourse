let startBtn = document.getElementById('start'),
  budgetValue = document.getElementsByClassName('budget-value')[0],
  dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

  expensesItem = document.getElementsByClassName('expenses-item'),
  expensesBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  countBtn = document.getElementsByTagName('button')[2],
  optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  incomeItem = document.querySelector('.choose-income'),
  checkSavings = document.querySelector('#savings'),
  sumValue = document.querySelector('.choose-sum'),
  percentValue = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value');


let money, time;


// Дата и бюджет на месяц
startBtn.addEventListener('click', function () {
  time = prompt('Введите дату в формате YYYY-MM-DD');
  money = +prompt('Введите бюджет на месяц', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Введите бюджет на месяц', '');

  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

});


// обязательные расходы
expensesBtn.addEventListener('click', function () {
  if (!expensesItem[0].value || !expensesItem[1].value || !expensesItem[2].value || !expensesItem[3].value) {
    expensesBtn.disabled = true;
    alert('Введите обязательные расходы.');
  }

  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let expense = expensesItem[i].value,
      cost = expensesItem[++i].value;

    if (isNaN(expense) && !isNaN(cost) && expense != null && cost != null &&
      expense != '' && cost != '' && expense.length < 50) {
      console.log("done");
      appData.expenses[expense] = cost;
      sum += +cost;
    } else {
      i--;
    }
  }

  expensesValue.textContent = sum;
});


// необязательные расходы

for (let i = 0; i < optionalExpensesItem.length; i++) {
  optionalExpensesItem[i].addEventListener('input', function() {
    optionalExpensesItem[i].value = optionalExpensesItem[i].value.replace(/[^А-Яа-яёЁ]/ig, '');
  });
}
optionalExpensesBtn.addEventListener('click', function () {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    if (optionalExpensesItem[i] != '') {
    let opt = optionalExpensesItem[i].value;
      appData.optionalExpenses[i] = opt;
      optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    } else {
      alert('Заполните все три поля русскими буквами!');
    }
  }
  
});



// расчет дневного бюджета и уровень дохода
countBtn.addEventListener('click', function () {
  if (appData.budget != undefined) {
    let expensesSum = 0;
    for (item in appData.expenses) {
      expensesSum += +appData.expenses[item];
    }

    console.log(expensesSum);

    appData.moneyPerDay = ((appData.budget - expensesSum) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay) {
      levelValue.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = 'Высокий уровень достатка';
    } else {
      levelValue.textContent = 'Произошла ошибка';
    }

  } else {
    alert('Введите сумму бюджета');
    countBtn.disabled = true;

  }
});


// Статьи возможного дохода
incomeItem.addEventListener('input', function () {

  let items = incomeItem.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

// Накопления и процент 
sumValue.addEventListener('input', function() {
  sumValue.value  = sumValue.value.replace(/[^0-9]/ig, '');
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;
      appData.monthIncome = sum / 100 / 12 * percent;
      appData.yearIncome = sum / 100 * percent;
     monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});
 // Накопления и процент
percentValue.addEventListener('input', function() {
  sumValue.value  = sumValue.value.replace(/[^0-9]/ig, '');
  if (appData.savings == true) {
    let sum = +sumValue.value,
    percent = +percentValue.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;
     monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
   
  }
});






let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};