c = factorial(10);
console.log("Factorial:\n[" + c + "]");

// Factorial from 0 to n
function factorial(n) {
    if (n <= 1) {
        return n;
    } else {
        return factorial( n - 1) * n;
    }
}