'use strict';

let money, time;

let appData = {
    budget: '',
    timeData : '',
    expenses: {},
    oprionalExpenses: {},
    income: [],
    savings: true
};

function start() {
    money = +prompt("Your month budget?", '');
    time = prompt("Enter date in format YYYY-MM-DD", '');
 
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Your month budget?", '');
    }
}
start();

appData.budget = money;
appData.timeData = time;

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Enter mandatody expenses type in this month"),
            b = prompt("How much will this cost?");
    
        if ( (typeof(a) === 'string') && (typeof(a)) != null && (typeof(a)) != null
            && a != '' && b != '' && a.length < 50 )  {
                appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }           
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("Your 1-day budget = " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 10) {
        console.log("Low level");
    } else {
        console.log("Good level");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("What svings sum?"),
            percent = +prompt("What percent?");

        appData.monthIncome = save/100/12 * percent;
        alert("Income in month is :" + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let answer = prompt("Enter oprional expenses type in this month");
        appData.oprionalExpenses[i] = answer;
    }
}
chooseOptExpenses();