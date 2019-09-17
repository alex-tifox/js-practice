'use strict';

let money, time;

money = prompt("Your month budget?");
time = prompt("Enter date in format YYYY-MM-DD");

let appData = {
    budget: '',
    timeData : '',
    expenses: {},
    oprionalExpenses: {},
    income: [],
    savings: false
};

appData.budget = money;
appData.timeData = time;

for (let i = 0; i < 2; i++) {
    let a = prompt("Enter mandatody expenses type in this month"),
        b = prompt("How much will this cost?");

    if ( (typeof(a) === 'string') && (typeof(a)) != null && (typeof(a)) != null
        && a != '' && b != '' && a.length < 50 )  {
            appData.expenses[a] = b;
    } else {

    }
}                    

appData.moneyPerDay = appData.budget/30;

alert("Your 1-day budget = " + appData.moneyPerDay);
