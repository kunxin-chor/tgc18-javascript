// objects are containers that can have function and data
let dog = {
    name:'Ah Kow', // data
    vaccines:['Rabies', 'Heartworms'],
    'date-of-birth':'21/12/2021',
    'bark':function(){
        console.log("woof woof");
    }
}
console.log(dog['name']);
console.log(dog.vaccines); // using the dot syntax
                           // but the key must be a valid variable name
console.log(dog['date-of-birth']); // only way to access a key
                                   // that is not a valid variable name
dog.bark();

let bill = {
    'total': 300,
    'calculateGST': function(){
        return 0.07 *this.total 
    }
}

console.log(bill.calculateGST());

// ADD A NEW KEY/VALUE PAIR TO AN OBJECT
// bill['tips'] = 30;
bill.tips = 30;
console.log(bill);