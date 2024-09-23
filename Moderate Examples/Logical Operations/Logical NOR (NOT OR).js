/*

NOR
-----------------
Input    Output

A   B   Q
---------
0   0   1
0   1   0
1   0   0
1   1   0

*/

console.log('[0, 0] -> ' + f_nor(0, 0));

function f_nor(a, b) {
    return f_not(f_or(a, b));
}

function f_not(a) {
    return 1 - a;
}

function f_or(a, b) {
    return (a + b) - (a * b);
}