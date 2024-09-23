/*

XOR
-----------------
Input    Output

A   B   Q
---------
0   0   0
0   1   1
1   0   1
1   1   0

*/

console.log('[0, 0] -> ' + f_xor(0, 0));

function f_xor(a, b) {
    return (a + b) - 2 * (a * b);
    // return (a-b) * (a-b);
    // return ((a + b) * (a + b)) % 2;
}