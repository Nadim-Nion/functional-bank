function getInputValue(inputId) {
  // debugger;
  const inputField = document.getElementById(inputId);
  const inputAmount = inputField.value;

  /*------------------------------- 
     clear the deposit input field 
   --------------------------------*/
  inputField.value = '';

  return inputAmount;
}


function updateTransactionDashboard(transactionId, transactionAmount) {
  // debugger; // it will work like "Breakpoint"
  const transactionTotal = document.getElementById(transactionId);
  const previousTransaction = transactionTotal.innerText; // taking the initial value (0)
  transactionTotal.innerText = transactionAmount; // taking value from input and override it into the deposit dashboard
  const updatedTransaction = parseFloat(previousTransaction) + parseFloat(transactionAmount);
  transactionTotal.innerText = updatedTransaction.toFixed(2); // updated deposit amount will show in the dashboard

}

function getCurrentBalance() {
  const balanceTotal = document.getElementById('balance-total');
  const previousBalance = parseFloat(balanceTotal.innerText); // taking initial value (1240)
  return previousBalance;
}

function updateBalanceDashboard(transactionAmount, isAdd) {
  // debugger;
  const balanceTotal = document.getElementById('balance-total');
  /* const previousBalance = balanceTotal.innerText; // taking initial value (1240)
  balanceTotal.innerText = transactionAmount; // taking value from input and override it into the balance dashboard */
  const previousBalance = getCurrentBalance();

  if (isAdd == true) {
    const updatedBalance = parseFloat(previousBalance) + parseFloat(transactionAmount);
    balanceTotal.innerText = updatedBalance.toFixed(2); // updated balance amount will show in the dashboard
  }

  else {
    const updatedBalance = parseFloat(previousBalance) - parseFloat(transactionAmount);
    balanceTotal.innerText = updatedBalance.toFixed(2); // updated balance amount will show in the dashboard

  }
}



/*------------------------------------------------ 
  ``Handle deposit button using event handler``
------------------------------------------------*/
document.getElementById('deposit-button').addEventListener('click', function () {

  const depositAmount = getInputValue('deposit-amount'); // code redundant or code repetition has been avoided
  if (depositAmount > 0) {
    updateTransactionDashboard('deposit-total', depositAmount);
    updateBalanceDashboard(depositAmount, true);
  }



  /*--------------------
    get user deposit  
 ---------------------*/
  /* const depositInput = document.getElementById('deposit-amount');
  const depositAmount = depositInput.value; 
  // console.log(depositAmount); */



  /*----------------------------- 
      update deposit dashboard 
  ------------------------------*/
  /*  const depositTotal = document.getElementById('deposit-total');
   const previousDeposit = depositTotal.innerText; // taking the initial value (0)
   depositTotal.innerText = depositAmount; // taking value from input and override it into the deposit dashboard
   const updatedDeposit = parseFloat(previousDeposit) + parseFloat(depositAmount);
   depositTotal.innerText = updatedDeposit.toFixed(2); // updated deposit amount will show in the dashboard */



  /*-------------------------------- 
       update balance dashboard
  ---------------------------------*/
  /* const balanceTotal = document.getElementById('balance-total');
  const previousBalance = balanceTotal.innerText; // taking initial value (1240)
  balanceTotal.innerText = depositAmount; // taking value from input and override it into the balance dashboard
  const updatedBalance = parseFloat(previousBalance) + parseFloat(depositAmount);
  balanceTotal.innerText = updatedBalance.toFixed(2); // updated balance amount will show in the dashboard */




  /*------------------------------- 
    clear the deposit input field 
  --------------------------------*/
  // depositInput.value = '';
});


/*------------------------------------------------ 
  ``Handle withdraw button using event handler``
------------------------------------------------*/
document.getElementById('withdraw-button').addEventListener('click', function () {

  const withdrawAmount = getInputValue('withdraw-amount'); // redundant code or code repeat has been avoided by using function
  const currentBalance = getCurrentBalance();
  if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
    updateTransactionDashboard('withdraw-total', withdrawAmount);
    updateBalanceDashboard(withdrawAmount, false);

  }
  else if (withdrawAmount > currentBalance) {
    alert("You can't withdraw more than your account balance");
  }


  /*--------------------- 
      get user withdraw 
  ----------------------*/
  /*  const withdrawInput = document.getElementById('withdraw-amount');
   // console.log(withdrawInput.value);
   const withdrawAmount = withdrawInput.value; */



  /*--------------------------- 
    update withdraw dashboard
  -----------------------------*/
  /* const withdrawTotal = document.getElementById('withdraw-total');
  const previousWithdraw = withdrawTotal.innerText; // taking initial value (0)
  withdrawTotal.innerText = withdrawAmount; // taking value from input and override it into the withdraw dashboard
  const updatedWithdraw = parseFloat(previousWithdraw) + parseFloat(withdrawAmount);
  withdrawTotal.innerText = updatedWithdraw; // updated withdraw amount will show in the dashboard */


  /*-------------------------------- 
      update balance dashboard
  ----------------------------------*/
  /* const balanceTotal = document.getElementById('balance-total');
  const previousBalance = balanceTotal.innerText; // taking initial value (1240)
  balanceTotal.innerText = withdrawAmount; // taking value from input and override it into the balance dashboard
  const updatedBalance = parseFloat(previousBalance) - parseFloat(withdrawAmount);
  balanceTotal.innerText = updatedBalance.toFixed(2); // updated balance amount will show in the dashboard

 */




  /*------------------------------ 
    clear the withdraw input field
  ------------------------------- */
  // withdrawInput.value = '';
});