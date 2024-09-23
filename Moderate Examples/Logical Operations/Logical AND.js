/*

AND
-----------------
Input    Output

A   B   Q
---------
0   0   0
0   1   0
1   0   0
1   1   1

*/

console.log('[1, 0] -> ' + f_and(1, 0));

function f_and(a, b) {
    return a * b;
}