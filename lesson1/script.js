"use strict";

let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let expensesType1 = prompt('Введите обязательную статью расходов в этом месяце');
let expenses1 = +prompt('Во сколько это обойдется?');

let expensesType2 = prompt('Введите обязательную статью расходов в этом месяце');
let expenses2 = +prompt('Во сколько это обойдется?');


let appData = {

 budget: money,
 timeData: time,

 expenses: {

 },

 optionalExpenses: {

 },

 income: {

 },

 savings: false

};

appData.expenses[expensesType1] = expenses1;
appData.expenses[expensesType2] = expenses2;

console.log(appData.expenses);


alert('Бюджет на один день ' + (money / 30) + 'р.');

