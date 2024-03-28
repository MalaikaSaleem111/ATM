#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 15000;
let myPin = 12453;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
}
let operationAnswer = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "checkbalance", "Fast Cash"]
    }
]);
if (operationAnswer.operation === "withdraw") {
    let amountAnswer = await inquirer.prompt([{
            name: "amount",
            message: "enter your amount",
            typer: "number"
        }]);
    if (amountAnswer.amount <= myBalance) {
        myBalance -= amountAnswer.amount,
            console.log(`Your remaining balance is ${myBalance}`);
    }
    else if (amountAnswer.amount > myBalance) {
        console.log("Unable to process transaction");
    }
}
else if (operationAnswer.operation === "Fast Cash") {
    let fastcash = await inquirer.prompt([{
            name: "fastopt",
            message: "Please select your amount",
            type: "list",
            choices: ["1000", "5000", "10000"]
        }]);
    myBalance -= fastcash.fastopt;
    console.log(`your remaining balance is ${myBalance}`);
}
else if (operationAnswer.operation === "checkbalance") {
    console.log(`your balance is ${myBalance}`);
}
else {
    console.log("Incorrect pin number.");
}
