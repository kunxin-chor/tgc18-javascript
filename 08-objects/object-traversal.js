let book = {
    'title': 'Dune',
    'author': 'Herbert West',
    'ISBN': '12-12-12-12-12',
    'pages': 720,
    'published_date': '11/12/1997',
}

// extract out each key in an object
for (let key in book) {
    console.log(key, ':', book[key]);
}

// We use Object.entries to retrieve the key/value pairs of an object
let entries = Object.entries(book);
console.log(entries);

for(let [key,value] of Object.entries(book)) {
    console.log(key, "=>", value);
}

// Check if a key exists in an object
console.log(`book.hasOwnProperty('ISBN') =>`, book.hasOwnProperty('ISBN'));
console.log(`book.hasOwnProperty('publisher') =>`, book.hasOwnProperty('publisher'));

// remove a key
delete book.pages;
console.log(book);

let userProfile = {
    'username':'John Smith',
    'address':{
        'street':'Yishun Ring Road',
        'building_number':'666',
        'floor':'11-257'
    }
}

console.log(userProfile.address.building_number);

// we want store the author, title and pages into their own variables
// let title = book.title;
// let author = book.author;
// let pages = book.pages;

let {title, author, ISBN} = book;
console.log(title, author, ISBN)  // for this to work, the variable names must exist in the object as keys

// destructure and rename
let {title:t, author:a, ISBN:i} = book;
console.log(t,a, i);

// destructure an argument if the argument is an object
let product = {
    'price': 36,
    'sku':'APPLE01',
    'description': 'Red apples',
    'salesTax': 0.07
}

// function calculateTotalPrice(p) {
//     return p.price * p.salesTax + p.price;
// }

function calculateTotalPrice({price, salesTax}) {
    return price * salesTax + price;
}

let totalPrice = calculateTotalPrice(product);
console.log(totalPrice);