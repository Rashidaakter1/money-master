document.getElementById('calc-btn').addEventListener('click',function(){
   const incomeInput = document.getElementById('income-input');
   const incomeInputNumber=parseFloat(incomeInput.value);
  


    const foodInput=document.getElementById('food-input');
    const foodInputNumber=parseFloat(foodInput.value);

    const rentInput=document.getElementById('rent-input');
    const rentInputNumber = parseFloat(rentInput.value);
    
    const clothsInput=document.getElementById('cloths-input');
    const clothsInputNumber = parseFloat(clothsInput.value);


    // calculate expenses

    const expensesInput = foodInputNumber+rentInputNumber+clothsInputNumber;
    const expenses=  document.getElementById('expenses');
    expenses.innerText=expensesInput;
    

    //calculate  balance 

    const balanceInput =incomeInputNumber-expensesInput;
    const balance = document.getElementById('balance');
    balance.innerText= balanceInput;


});

//save btn add event lisener

document.getElementById('save-btn').addEventListener('click',function(){
    //saving amount//

    const incomeInput = document.getElementById('income-input');
    const incomeInputNumber=parseFloat(incomeInput.value);

    const inputPercentage = document.getElementById('input-percentage');
    const inputPercentageNumber = parseFloat(inputPercentage.value);
    const percentage = inputPercentageNumber/100;


    const savingAmount =document.getElementById('saving-amount');
    const savingAmountInput = incomeInputNumber*percentage;
    savingAmount.innerText=savingAmountInput;


    //remaining amount

    const balance = document.getElementById('balance');
    const balanceNumber = parseFloat(balance.innerText);
   

    const remainingAmountNumber=balanceNumber-savingAmountInput;
    console.log(remainingAmountNumber);
    const remainingAmount = document.getElementById('remaining-balance');
    remainingAmount.innerText=remainingAmountNumber;

})



