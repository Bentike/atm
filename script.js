alert("Welcome To Second Bank Nigeria \n Please insert your Card");
let defaultPin = "2385";
let cardPin = prompt("Enter Card Pin");
if (cardPin !== defaultPin) {
  alert("incorrect pin");
}
let menu = prompt("Select An Option \n 1. Qiuckteller \n 2. Transfer \n 3. Airtime \n 4. Withdrawal \n 5. Check Balance");
if(menu === "4"){
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
