e = fibonacci(2, [0, 1, 2], 5);
console.log("Fibonacci:\n[" + e + "]");

// Fibonacci
function fibonacci(n, m, t) {

    n++;
    m[n] = m[n - 1] + m[n - 2];

    if (n >= t) {
        return m;
    } else {
        return fibonacci(n, m, t);
    }
}