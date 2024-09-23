d = sequence(5, [], 0, 5);
console.log("A sequence:\n[" + d + "]");

// Just a sequence
function sequence(n, m, i, t) {

    m[i] = n;
    i++;

    if (i >= t) {
        return m;
    } else {
        return sequence((n - 1) + (n - 2), m, i, t);
    }
}