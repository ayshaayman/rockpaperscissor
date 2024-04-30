import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "please select one option from the following choices",
        type: "list",
        name: "choice1",
        choices: ["rock", "paper", "scissors"]
    },
    {
        message: "please select one option from the following choices",
        type: "list",
        name: "choice2",
        choices: ["rock", "paper", "scissors"]
    }
]);
if (answer.choice1 === answer.choice2) {
    console.log("tie");
}
else if (answer.choice1 === "rock" && answer.choice2 === "scissors") {
    console.log("rock wins");
}
else if (answer.choice1 === "rock" && answer.choice2 === "paper") {
    console.log("paper wins");
}
else if (answer.choice1 === "paper" && answer.choice2 === "scissors") {
    console.log("scissors wins");
}
else if (answer.choice1 === "paper" && answer.choice2 === "rock") {
    console.log("paper wins");
}
else if (answer.choice1 === "scissors" && answer.choice2 === "paper") {
    console.log("scissors wins");
}
else if (answer.choice1 === "scissors" && answer.choice2 === "rock") {
    console.log("rock wins");
}
