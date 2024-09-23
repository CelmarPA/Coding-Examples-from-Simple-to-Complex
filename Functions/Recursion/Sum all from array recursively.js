q = [1, 3, 3, 4 , 5, 9];
f = sum_array(q.length - 1, q, 0);
console.log("Sum array:[" + f + "]");

// Sum all from array
function sum_array(n, q, r) {

    r += q[n];

    if (n <= 0) {
        return r;
    } else {
        return sum_array(n - 1, q, r);
    }
}