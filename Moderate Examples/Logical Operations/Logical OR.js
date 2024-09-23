/*

OR
-----------------
Input    Output

A   B   Q
---------
0   0   0
0   1   1
1   0   1
1   1   1

*/

console.log('[1, 0] -> ' + f_or(1, 0));

function f_or(a, b) {
    return (a + b) - (a * b);
}