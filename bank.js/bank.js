function getInputValue(Input){
    const DepositInput = document.getElementById(Input);
    const depositAmountText = DepositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    DepositInput.value='';
    return depositAmount;
};

function UpdateTotal(inputBa,depositAmount){
    const depositTotal = document.getElementById(inputBa);
    const depositTotalText=depositTotal.innerText;
    const previousdepositTotal= parseFloat(depositTotalText) ;

 
    
    depositTotal.innerText = previousdepositTotal+depositAmount;

};

function UpdateBalance(depositAmount,isAdd){
        const balanceTotal= document.getElementById('Balace-Total');
       /*  const balanveTotalText=balanceTotal.innerText;
        const previousBalanceTotal= parseFloat(balanveTotalText);
        */
       const previousBalanceTotal=getCurrentBalance();
        if(isAdd==true){
            balanceTotal.innerText = previousBalanceTotal+depositAmount;


        }
        else{
            balanceTotal.innerText = previousBalanceTotal-depositAmount;
        }
};

function getCurrentBalance(){
    const balanceTotal= document.getElementById('Balace-Total');
    const balanveTotalText=balanceTotal.innerText;
    const previousBalanceTotal= parseFloat(balanveTotalText);
    return previousBalanceTotal;
};






document.getElementById('Deposit-button').addEventListener(
    'click' , function(){
    /* const DepositInput = document.getElementById('Deposit-input');
    const depositAmountText = DepositInput.value;
    const depositAmount = parseFloat(depositAmountText); */

   

      /*  const depositTotal = document.getElementById('Deposit-total');
        const depositTotalText=depositTotal.innerText;
        const previousdepositTotal= parseFloat(depositTotalText) ;

     
        
        depositTotal.innerText = previousdepositTotal+depositAmount;

 */    

        /* const balanceTotal= document.getElementById('Balace-Total');
        const balanveTotalText=balanceTotal.innerText;
        const previousBalanceTotal= parseFloat(balanveTotalText);
        balanceTotal.innerText = previousBalanceTotal+depositAmount; */

        const depositAmount=getInputValue('Deposit-input');
        if(depositAmount > 0){
            UpdateTotal('Deposit-total',depositAmount);
            UpdateBalance(depositAmount,true);
        }
        
        



        /* DepositInput.value=''; */
        
    }
);

document.getElementById('Withdraw-button').addEventListener('click', function(){
    /* const WithdrawInput=document.getElementById('withdraw-input');
    const withdrawAmountText= WithdrawInput.value ;
    const WithdrawAmount = parseFloat(withdrawAmountText) */
   

    /* const withdrawTotal= document.getElementById('Withdrawe-Total');
    const PreviouswithdrawTotalText= withdrawTotal.innerText;
    const previouswithdrawTotal=parseFloat(PreviouswithdrawTotalText);

    withdrawTotal.innerText =WithdrawAmount+previouswithdrawTotal; */

   /*  WithdrawInput.value=''; */
  

    /* const balanceTotal= document.getElementById('Balace-Total');
    const balanceTotalText= balanceTotal.innerText;
    const previousBalanceTotal= parseFloat(balanceTotalText);
    balanceTotal.innerText= previousBalanceTotal-WithdrawAmount; */

    const WithdrawAmount = getInputValue('withdraw-input');
    const CuerrentBalance= getCurrentBalance();
    if(WithdrawAmount > 0 && WithdrawAmount < CuerrentBalance){
        UpdateTotal('Withdrawe-Total',WithdrawAmount);
        UpdateBalance(WithdrawAmount,false);

    }
}

    
)