// make sure to have type in yarn add prompt-sync in the terminal first
// at the directory where this file is in.
const prompt = require('prompt-sync')();

// revise how to create our own functions
// 1. begin with `function` keyword
// 2. name of the function
// 3. define the parameters (aka. the arguments)
// 4. return the result of the function
function calculateDistance(speed, time) {
    return speed*time;
}

// if the tickets are for weekend, then adults and children tickets
// both cost 10.50
// if the tickets are for weekedays, then adults cost 8.50 and children
// tickets cost 4.50
// the function should return the cost
function calculatePriceOfTickets(isWeekend, noOfAdult, noOfChildren) {
    let totalCost = 0;
    if (isWeekend) {
        totalCost = (noOfAdult + noOfChildren) * 10.50;
    } else {
        totalCost = noOfAdult * 8.50 + noOfChildren * 4.50;
    }
    return totalCost;
}

let isWeekend = prompt("Weekend (y/n)? ") == 'y';
let noOfChildren = prompt("Number of child tickets: ");
let noOfAdult = prompt("Number of adult tickets: ");
let price = calculatePriceOfTickets(isWeekend, noOfAdult, noOfChildren);
console.log("Total price = ", price);

