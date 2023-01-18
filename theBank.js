let balanceNow = 1000; //the current bank balance
let loanNow = 0; //the current loan
let amountOfMoneyInWorkAccount = 0; //money in the work account
let amountOfMoneyDeducted = 0;
let isThereLoan = false;

function calculateLoan() { //"function for section 1. The Bank"

    let loanAmountWanted = prompt("How big of a loan do you want?");
    if ((loanAmountWanted >= balanceNow / 2) || (loanNow != 0)) {
        alert("You cannot take the loan");
        document.getElementById("currentBalance").innerHTML = balanceNow;
        document.getElementById("currentLoan").innerHTML = loanNow;
    } else if ((loanAmountWanted <= balanceNow / 2) && (loanNow === 0)) {
        alert("You can take the loan");
        loanNow = loanAmountWanted;
        document.getElementById("currentBalance").innerHTML = balanceNow;
        document.getElementById("currentLoan").innerHTML = loanNow;
    }

}

function bankMoney() { //"function for section 2. Work"

    if (loanNow != 0) {
        (amountOfMoneyDeducted = (amountOfMoneyInWorkAccount/100)*10)
        loanNow = parseFloat(loanNow)+parseFloat(amountOfMoneyDeducted);
        document.getElementById("currentLoan").innerHTML = loanNow;
        balanceNow = (balanceNow+(amountOfMoneyInWorkAccount-amountOfMoneyDeducted))
        amountOfMoneyInWorkAccount = 0;
        document.getElementById("currentBalance").innerHTML = balanceNow;
        document.getElementById("currentPay").innerHTML = amountOfMoneyInWorkAccount;
    } else if (loanNow === 0) {
        balanceNow = balanceNow+amountOfMoneyInWorkAccount;
        amountOfMoneyInWorkAccount = 0;
        document.getElementById("currentBalance").innerHTML = balanceNow;
        document.getElementById("currentPay").innerHTML = amountOfMoneyInWorkAccount;
    }
}

function addMoneyToAccount() { //"function for section 2. Work"

    amountOfMoneyInWorkAccount = amountOfMoneyInWorkAccount + 100;
    document.getElementById("currentPay").innerHTML = amountOfMoneyInWorkAccount;

}

function repayLoan() { //"function for section 2. Work" 

    if(loanNow != 0 && amountOfMoneyInWorkAccount != 0) {
        document.getElementById("repayLoanButton").disabled;
    }

}
