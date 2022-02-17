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
        // inputBox.value = '';
        return alert('please input valid number')

    }
    // inputBox.value = '';
    return inputAmmount;

}
// 
function calculateBalance(income, expense) {
    let outcome = income - expense;
    return outcome;
}
// 
calculateBtn.addEventListener('click', function () {

    /* get income input */
    let userInput = getInputAmmount('income-input');
    let availableAmmount = parseFloat(totalBalance.innerText);

    let newExpense = calculateExpense();
    let currentExpense = parseFloat(totalExpense.innerText);
    totalExpense.innerText = newExpense + currentExpense;
    let findBalance = calculateBalance(userInput, newExpense);
    // let newBalance = userInput + availableAmmount;
    // let getBalance = newBalance - newExpense;
    totalBalance.innerText = findBalance;

})


function calculateExpense() {
    let availableAmmount = parseFloat(totalBalance.innerText);
    let currentExpense = parseFloat(totalExpense.innerText);
    // let percentage = parseFloat(savingAmmount.innerText);

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
    savingAmmount.innerText = currentSavings + percentage;
    console.log(percentage);
    let previousBalance = parseFloat(totalBalance.innerText);
    let updateBalance = calculateBalance(previousBalance - percentage);
    remainingBalance.innerText = updateBalance;
    console.log(typeof updateBalance);
})