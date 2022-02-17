function totalExpense() {
    const food = document.getElementById('food-input').value;
    const foodValue = parseFloat(food);
    const rent = document.getElementById('rent-input').value;
    const rentValue = parseFloat(rent);
    const clothes = document.getElementById('clothes-input').value;
    // const saveNumber = document.getElementById('save-input');
    // saveNumber.innerText = savedAmmount;
    const clothesValue = parseFloat(clothes);
    const total = foodValue + rentValue + clothesValue;
    return total;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = document.getElementById('income-input').value;
    const total = totalExpense();
    const expense = document.getElementById('total-expense');
    expense.innerText = total;
    const balance = calculateBalance(income, total)
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = balance;
    console.log(totalBalance);

})
function calculateBalance(num1, num2) {
    const result = num1 - num2;
    return result;
}
function savingsCalculator(num1, num2) {
    const result = num1 * num2;
    return result;
}
function updateBalance() {
    let previousTotal = calculateBalance
}

/* save button */
document.getElementById('save-btn').addEventListener('click', function () {
    const saveInput = document.getElementById('save-input').value;
    const previousExpense = totalExpense();
    const firstIncome = document.getElementById('income-input').value;
    const percentage = saveInput / 100;
    const savedAmmount = savingsCalculator(firstIncome, percentage);

    const savingAmmount = document.getElementById('saving-ammount');

    savingAmmount.innerText = savedAmmount;
    console.log(savingAmmount);

    const finalExpense = document.getElementById('total-expense');

    const secondBalance = calculateBalance(firstIncome, savedAmmount)
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = secondBalance;

    remainingBalance.innerText = secondBalance;



})
