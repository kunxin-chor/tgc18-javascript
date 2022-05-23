function compareNumber(lhs, rhs) {
    // return 0 if lhs and rhs is the same
    // return -1 if lhs should come first
    // return 1 if rhs should come first 
    if (lhs < rhs) {
        return -1;
    } else if (lhs > rhs) {
        return 1;
    } else {
        return 0;
    }
}

function compareNumberDescending(lhs, rhs){
    if (lhs < rhs) {
        return 1;
    } else if (lhs > rhs) {
        return -1;
    } else {
        return 0;
    }
}

function compareByLength(lhs, rhs) {
    if (lhs.length < rhs.length) {
        return -1
    } else if (lhs.length > rhs.length) {
        return 1;
    } else {
        return 0;
    }
} 

let fruits = ['pears', 'bananas', 'apples', 'durains', 'figs', 'strawberries'];
fruits.sort(compareByLength);
console.log("fruits = ", fruits);

let numbers = [10, 11, 5, 51, 6, 12, 13, 131];
numbers.sort(compareNumberDescending);
console.log("numbers =", numbers);

numbers.sort(function(a,b){
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0;
    }
})