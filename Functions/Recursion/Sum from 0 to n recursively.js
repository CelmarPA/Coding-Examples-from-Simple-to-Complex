b = sum(23);
console.log("Sum: [" + b + "]");

// Sum from 0 to n
function sum(n) {
    if (n <= 1) { return n; }
    return n + sum(n - 1);
}