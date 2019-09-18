'use strict';
let money, time;

let startBtn = document.getElementById("start"),
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
    
function start() {
    money = +prompt("Your month budget?", '');
    time = prompt("Enter date in format YYYY-MM-DD", '');
 
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Your month budget?", '');
    }
}
start();

let appData = {
    budget: '',
    timeData : '',
    expenses: {},
    oprionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
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
    },

    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Your 1-day budget = " + appData.moneyPerDay);
    },

    detectLevel: function() {
        if (appData.moneyPerDay < 10) {
            console.log("Low level");
        } else {
            console.log("Good level");
        }
    },

    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("What svings sum?"),
                percent = +prompt("What percent?");
    
            appData.monthIncome = save/100/12 * percent;
            alert("Income in month is :" + appData.monthIncome);
        }
    },

    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let answer = prompt("Enter oprional expenses type in this month");
            appData.oprionalExpenses[i] = answer;
        }
    },

    chooseIncome: function() {
        let items = prompt("What will give you additional income? (Write down through ,)");
        if (typeof(items) != 'string' || items === "" || typeof(items) === null) {
            console.log("Uncorrect data");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt("Something else?"));
            appData.income.sort();
        }

        appData.income.forEach(function(item, i) {
            console.alert("Add. profit methods: " + i + ": "+ item);
        });
    }
};

appData.budget = money;
appData.timeData = time;

for (let key in appData) {
    console.log("Out object includes data " + key + " - " + appData[key]);
}


