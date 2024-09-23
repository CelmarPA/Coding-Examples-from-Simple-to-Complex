a = x("#", "", 10);
console.log("Repeat:\n[" + a + "]");

// Repeat string n times
function x(c, s, n) {

    s += c;

    if(s.length >= n) {
        return s;
    } else {
        return x(c, s, n);
    }
}