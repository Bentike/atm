alert("Welcome To Second Bank Nigeria \n Please insert your Card");
let defaultPin = "2385";
let cardPin = prompt("Enter Card Pin");
if (cardPin !== defaultPin) {
  alert("incorrect pin");
}
let menu = prompt("Select An Option \n 1. Transfer \n 2. Airtime \n 3. Withdrawal \n 4. Check Balance");

// Transfer
if(menu === "1"){
    let bank = prompt("Choose Beneficiary's Bank \n 1. GTB \n 2. Second Bank \n 3. Access");
    let recieverAccountNumber = prompt("Enter Account Number");
    let amount = prompt("Enter Amount");
    alert("you are about to transfer " + "#" + amount + " to " + recieverAccountNumber);
    let pin = prompt("Enter your pin");
    alert(`You have successfully transfer #${amount} to ${recieverAccountNumber}`);
}

// WITHDRAWAL;
if(menu === "3"){
    let accountType = prompt("1. Savings \n 2. Current");
    let amountToWithdraw = prompt("1000 \n 5000 \n 10000 \n Others");
    if(amountToWithdraw === "1000" || amountToWithdraw === "5000" || amountToWithdraw === "10000"){
        let confirmPin = prompt("Kindly Enter your Pin to proceed");
        if(confirmPin !== defaultPin) alert("Incorrect Pin");
        else alert(`Congratulations you have successfully withdraw #${amountToWithdraw}.`);
        let reciept = prompt("Do you want a receipt for this transaction? \n 1. Yes \n 2. No");
        if(reciept === "1") alert("Thank You! Please Remove your card and take your receipt");
        alert("Thank You! Kindly remove your card.");
    }
}
