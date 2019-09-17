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
appData.expenses[prompt("Enter mandatody expenses type in this month")] 
                    = prompt("How much will this cost?");

alert("Your 1-day budget = " + appData.budget/30);
