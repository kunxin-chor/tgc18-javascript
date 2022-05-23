// 1. transformation (aka mapping)
// take every single element in an array
// and change it to something else
let words = ['anger', 'eat', 'panda', 'chicken'];
// get a new array where it is an exact duplicate
// of words but every element is now in upper case
let ans = [];
for (let w of words) {
    ans.push(w.toUpperCase());
}
console.log(ans);

// take every single word in the original array
// and put into the new array the word 's length
let count = [];
for(let w of words){
    count.push(w.length);
}
console.log(count);
let products = [
    {
        'SKU':'ACME_ANVIL',
        'cost': 3.50
    },
    {
        'SKU':'ACME_SCREWDRIVER',
        'cost': 5.00
    },
    {
        'SKU':'ACME_HAMMER',
        'cost':12.00
    }
]

let sku = [];
for (let p of products){
    sku.push(p.SKU)
}
console.log(sku);

// 2. FILTERING
// given an array, create a new array that contains elements
// from the original array provided that they meet certain requirements
let fruits = ['figs', 'apples', 'pears', 'strawberries', 'mangosteen', 'durains'];
let shortlisted = [];
for (let eachFruit of fruits) {
    if (eachFruit.length >=6) {
        shortlisted.push(eachFruit);
    }
}
console.log("Fruits with at least 6 characters =>", shortlisted);

let shortlistedProducts = [];
for(let p of products){
    if (p.cost >= 5) {
        shortlistedProducts.push(p);
    }
}
console.log("Product costing more than 5=>", shortlistedProducts);

// 3. REDUCING
// summarizing the array to a SINGLE value
// think of it as aggregating 
let costs = [20, 100, 500, 40];
let total = 0;
for (let c of costs) {
    total += c;
}
console.log("total = ", total);
let averageCost = total / costs.length;

// find the fruits with the longest length
let longestFruit = fruits[0];
for (let f of fruits) {
    if (f.length > longestFruit.length) {
        longestFruit = f;
    }
}
console.log("Fruit with the longest length =>", longestFruit);