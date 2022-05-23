
// normal functions are hoisted
// when you run a JavaScript program, the JavaScript
// will look for all functions in the file and process
// them first
foobar();

// but anon functions are NOT hoisted. This means
// we need to define them before we use them
g();
let g = function() {
    return "Hello world";
}

function foobar() {
    console.log("foobar");
}

