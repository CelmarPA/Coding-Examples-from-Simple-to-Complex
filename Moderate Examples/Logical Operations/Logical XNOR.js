/*

XNOR
-----------------
Input    Output

A   B   Q
---------
0   0   1
0   1   0
1   0   0
1   1   1

*/

console.log('[0, 0] -> ' + f_xnor(0, 0));

function f_xnor(a, b) {
    return f_not(f_xor(a, b));

    // return f_not(f_and(f_not(a), b) + f_and(a, f_not(b)));
    // return f_not(f_or(f_not(a), b) + f_or(a, f_not(b)));
    // return f_not(f_or(a, b)) + (a * b);
    // return f_not((a + b) - (a * b)) + (a * b);
    // return f_not((a + b) - (a * b) + (a * b));
    // return f_not((a + b) - 2 * (a * b)); 
}

function f_xor(a, b) {
    return (a + b) - 2 * (a * b);
}

function f_not(a) {
    return 1 - a;
}

// function f_or(a, b) {
//    return (a + b) - (a * b);
// }

// function f_and(a, b) {
//    return (a * b);
//}