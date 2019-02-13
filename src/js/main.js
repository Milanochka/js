let startBtn = document.querySelector('#start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingValue = document.getElementsByClassName('yearsavings-value')[0],

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

let money,time,sumOpt = 0;


startBtn.addEventListener('click',function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth()+1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    appData.clickCheck = true;
});

expensesBtn.addEventListener('click', function () {

    if (appData.clickCheck == true) {
        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;

            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
                sumOpt += +b;
            } else {
                i = i - 1;
            }

        }
        expensesValue.textContent = sumOpt;
    }

});
optionalExpensesBtn.addEventListener('click',function () {
    if (appData.clickCheck == true) {
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            sumOpt += appData.optionalExpenses[i];
            optionalExpensesValue.textContent = sumOpt + '';
        }
    }

});

countBtn.addEventListener('click', function () {
    if(appData.clickCheck == true ) {
        appData.moneyPerDay = ((appData.budget - sumOpt) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка"
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Cредний уровень достатка"
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка"
        } else {
            levelValue.textContent = "Произошла ошибка"
        }
    }
});

incomeItem.addEventListener('input', function () {
    if (appData.clickCheck == true) {
        let item = incomeItem.value;
        appData.income = item.split(', ');
        incomeValue.textContent = appData.income;
    }

});
checkSavings.addEventListener('click', function () {

    if(appData.savings == true) {

        appData.savings == false
    } else {
        appData.savings == false
    }
});

sumValue.addEventListener('input', function () {
    if (appData.clickCheck == true && appData.savings == true) {

        let sum = +sumValue.value,
            percent = +percentValue.value;
        console.log(percent)

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingValue.textContent = appData.yearIncome.toFixed(1);

    }
});

percentValue.addEventListener('input', function () {

    if (appData.clickCheck == true && appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        console.log(percent)

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingValue.textContent = appData.yearIncome.toFixed(1);

    }``
});


let appData = {
    budget: money,
    expenses: {},
    clickCheck: false,
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};