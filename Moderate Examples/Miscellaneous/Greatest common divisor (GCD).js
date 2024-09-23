// Greatest common divisor (GCD)

console.log(gcd(45, 12));

function gcd(a, b) {
    if (a === 0) {
        return b;
    }

    while (b !== 0) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }
    return a;
}