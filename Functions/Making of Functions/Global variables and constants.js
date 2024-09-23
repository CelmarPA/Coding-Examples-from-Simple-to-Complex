const a = 3.1415; // Constant
var b = 11; // Global variable

b = compute();
console.log(b + "\n" + a);

function compute() {
    let x = b;
    return x + x / x - x * x;
}