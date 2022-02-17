//justify input number positive or negative

function isInputNumber(input){
    const Input =document.getElementById(input +'-input');
    const inputNumbercheck = Input.value;
    if(parseFloat(inputNumbercheck) <= 0){
        
        const numberCheck = document.getElementById('number-check');
        numberCheck.style.display='block';
        return numberCheck;
        
    }
    else {

        const numberCheck = document.getElementById('number-check');
        numberCheck.style.display='none';
        return numberCheck;
    }
   
}
//input function
function getInput(inputId){
    const input = document.getElementById(inputId +'-input');
    const inputNumber =parseFloat(input.value);
    return inputNumber;
    
}


document.getElementById('calc-btn').addEventListener('click',function(){
 
 //input value is number or string check   

    isInputNumber("income")
    isInputNumber("food")
    isInputNumber("rent")
    isInputNumber("cloths")

  

 // get all the inputs and make input a number   
    getInput("income")
    
    getInput('food')

    getInput('rent')
   
    getInput('cloths')


    // calculate expenses

    const expensesInput = getInput('food')+getInput('rent')+getInput('cloths')
    const expenses=  document.getElementById('expenses');
    expenses.innerText=expensesInput;
    

    //calculate  balance 
   
    const balanceInput = getInput('income')-expensesInput;
    const balance = document.getElementById('balance');
    balance.innerText= balanceInput;

    // balance check  

    isBalanceismore()
    function isBalanceismore (){
        if(expensesInput>getInput('income')){
            const balanceCheck = document.getElementById('balance-check');
             balanceCheck.style.display='block';
             balance.innerText='';
             return balanceCheck;
         }
         else{
            const balanceCheck = document.getElementById('balance-check');
            balanceCheck.style.display='none';
            return balanceCheck;
         }

     
    }

    

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


    //saving will not more than balance
    isSavingCan()
    function isSavingCan (){
        if(savingAmountInput>balanceNumber){
            const savingCheck = document.getElementById('saving-check');
             savingCheck.style.display='block';
             savingAmount.innerText='';
             remainingAmount.innerText='';

             return savingCheck;
         }
         else{
            const savingCheck = document.getElementById('saving-check');
            savingCheck.style.display='none';
            return savingCheck;
         }

    }


})



