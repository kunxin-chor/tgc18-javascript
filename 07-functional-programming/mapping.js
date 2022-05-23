// iterative example (iterative == using a loop)
let names = ['Susan', 'Andy', 'Andrew', 'Domonic', 'Daniel'];
let uppercase = [];
for(let n of names) {
    uppercase.push(n.toUpperCase());
}
console.log(uppercase);

// functional mapping
let u2 = names.map(function(element){
    return element.toUpperCase();
})

console.log(u2);

// 2. filtering
let food = [
    {
        'name':'Roti prata',
        'calorie': 600
    },
    {
        'name':'Salad with no dressing',
        'calorie': 200
    },
    {
        'name':'KFC Fried Chicken Three Piece Meal',
        'calorie': 1000
    },
    {
        'name':'Raw Fish',
        'calorie': 220
    }
]

// functional programming: filter
let diet2 = food.filter(function(element){
    return element.calorie < 500;
})

// iterative
let diet = [];
for (let f of food) {
    if (f.calorie < 500) {
        diet.push(f);
    }
}
console.log("Diet = ", diet);
console.log("Diet2 = ", diet2);

// REDUCING
let numbers = [2,4,6,8,9];
let total = 0;
for(let n of numbers){
    total += n;
}
console.log("total =>", total);

let reducer = function(soFar, number){
    return number + soFar;
}

let total2 = numbers.reduce(reducer, 0);

