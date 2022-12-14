// declaring global variable by getElementId
const calculateBtn = document.getElementById('calculate-btn');
const saveBtn = document.getElementById('save-btn');
const incomeInput = document.getElementById('income-input');
const foodInput = document.getElementById('food-input');
const rentInput = document.getElementById('rent-input');
const clothesInput = document.getElementById('clothes-input');
const totalExpense = document.getElementById('total-expense');
const totalBalance = document.getElementById('total-balance');
const saveInput = document.getElementById('save-input');
const savingAmmount = document.getElementById('saving-ammount');
const remainingBalance = document.getElementById('remaining-balance');

/* get input ammount from user */
function getInputAmmount(boxId) {
    let inputBox = document.getElementById(boxId);
    let inputAmmount = parseFloat(inputBox.value);
    if (isNaN(inputAmmount) || inputAmmount < 0) {
        return alert('please input valid number')

    }
    return inputAmmount;
}
// calculate balance function
function calculateBalance(income, expense) {
    let outcome = income - expense;
    return outcome;
}
// calculate button
calculateBtn.addEventListener('click', function () {
    let userInput = getInputAmmount('income-input');
    let availableAmmount = parseFloat(totalBalance.innerText);
    let newExpense = calculateExpense();
    let currentExpense = parseFloat(totalExpense.innerText);
    totalExpense.innerText = newExpense + currentExpense;
    let findBalance = calculateBalance(userInput, newExpense);
    totalBalance.innerText = findBalance;
})
// function to calculate expense
function calculateExpense() {
    let availableAmmount = parseFloat(totalBalance.innerText);
    let currentExpense = parseFloat(totalExpense.innerText);
    let foodExpense = getInputAmmount('food-input');
    let rentExpense = getInputAmmount('rent-input');
    let clothesExpense = getInputAmmount('clothes-input');
    let combinedExpense = foodExpense + rentExpense + clothesExpense;
    return combinedExpense;
}
/* Save button */
saveBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let percentInput = parseFloat(saveInput.value);
    let incomeAmmount = getInputAmmount('income-input');
    let percentage = incomeAmmount * percentInput / 100;
    let currentSavings = parseFloat(savingAmmount.innerText);
    if (incomeAmmount > 0 || percentInput > 0) {
        savingAmmount.innerText = currentSavings + percentage;
    }
    else {
        return alert('please put positive number')
    }
    let newTotal = parseFloat(totalBalance.innerText);
    if (percentage > newTotal) {
        return alert('you can not save more than balance')

    }
    else if (percentInput < 0) {
        return alert('negative numbers are not accepted')

    }
    else {
        const updateBalance = newTotal - percentage;
        remainingBalance.innerText = updateBalance;
        // clear input fields values
        saveInput.value = '';
        foodInput.value = '';
        rentInput.value = '';
        clothesInput.value = '';
        incomeInput.value = '';
    }

})