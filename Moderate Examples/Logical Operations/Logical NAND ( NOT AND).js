/*

NAND
-----------------
Input    Output

A   B   Q
---------
0   0   1
0   1   1
1   0   1
1   1   0

*/

console.log('[1, 1] -> ' + f_nand(1, 1));

function f_nand(a, b) {
    return f_not(f_and(a, b));
}

function f_not(a) {
    return 1 - a;
}

function f_and(a, b) {
    return a * b;
}