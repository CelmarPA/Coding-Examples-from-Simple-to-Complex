var i = j = 0;
var n1 = 2;
var n2 = 3;
var q = n1 * n2;

for(var v = 0; v < q; v++) {
    j = v % n2;
    if (j == 0 && v != 0 && i < n1 && v != q) { i += 1; }
    console.log("i = " + i + ", j = " + j);
}