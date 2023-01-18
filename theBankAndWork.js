let balanceNow = 1000; //The current bank balance
let loanNow = 0; //The current loan amount
let amountOfMoneyInWorkAccount = 0; //Money in the work account; aka "pay"
let amountOfMoneyDeducted = 0; //Amount of money deducted if there is loan 
let isThereLoan = false; //Is there loan or not

document.getElementById("currentBalance").innerHTML = balanceNow;
document.getElementById("currentLoan").innerHTML = loanNow;
document.getElementById("currentPay").innerHTML = amountOfMoneyInWorkAccount;
document.getElementById("repayLoanButton").style.visibility = "hidden";

//"functionality for section 1. The Bank"
function calculateLoan() { 
    let loanAmountWanted = prompt("How big of a loan do you want?");
    if ((loanAmountWanted >= balanceNow / 2) || (loanNow != 0)) {
        alert("You cannot get a loan more than double your bank balance");
        document.getElementById("currentBalance").innerHTML = balanceNow;
        document.getElementById("currentLoan").innerHTML = loanNow;
    } else if ((loanAmountWanted <= balanceNow / 2) && (loanNow === 0)) {
        alert("You can take the loan");
        loanNow = loanAmountWanted;
        document.getElementById("currentBalance").innerHTML = balanceNow;
        document.getElementById("currentLoan").innerHTML = loanNow;
    }

    if (loanNow > 0) {
        document.getElementById("repayLoanButton").style.visibility = "visible";
    }
}

//"function for section 2. Work"
function bankMoney() { 
    if (loanNow != 0) {
        (amountOfMoneyDeducted = (amountOfMoneyInWorkAccount / 100) * 10)
        loanNow = parseFloat(loanNow) + parseFloat(amountOfMoneyDeducted);
        document.getElementById("currentLoan").innerHTML = loanNow;
        balanceNow = (balanceNow + (amountOfMoneyInWorkAccount - amountOfMoneyDeducted))
        amountOfMoneyInWorkAccount = 0;
        document.getElementById("currentBalance").innerHTML = balanceNow;
        document.getElementById("currentPay").innerHTML = amountOfMoneyInWorkAccount;
    } else if (loanNow === 0) {
        balanceNow = balanceNow + amountOfMoneyInWorkAccount;
        amountOfMoneyInWorkAccount = 0;
        document.getElementById("currentBalance").innerHTML = balanceNow;
        document.getElementById("currentPay").innerHTML = amountOfMoneyInWorkAccount;
    }
}

function addMoneyToAccount() { 
    amountOfMoneyInWorkAccount = amountOfMoneyInWorkAccount + 100;
    document.getElementById("currentPay").innerHTML = amountOfMoneyInWorkAccount;
}

//"functionality for section 2. Work - 2.4 Repay Loan"
function repayLoan() {
    if (amountOfMoneyInWorkAccount >= loanNow) {
        amountOfMoneyInWorkAccount = amountOfMoneyInWorkAccount - loanNow;
        loanNow = 0;
        balanceNow = balanceNow + amountOfMoneyInWorkAccount;
        amountOfMoneyInWorkAccount = 0;
    } else {
        loanNow = loanNow - amountOfMoneyInWorkAccount;
        amountOfMoneyInWorkAccount = 0;
    }
    document.getElementById("currentLoan").innerHTML = loanNow;
    document.getElementById("currentBalance").innerHTML = balanceNow;
    document.getElementById("currentPay").innerHTML = amountOfMoneyInWorkAccount;
}
