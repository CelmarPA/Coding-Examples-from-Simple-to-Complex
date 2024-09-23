var m = [
    [2, 4, 6],
    [3, 5, 6],
    [3, 5, 4]
];

var i = j = 0;
var n1 = m.length;
var n2 = m[0].length;
var q = n1 * n2;

for(var v = 0; v < q; v++) {
    j = v % n2;
    if(j === 0 && v !== 0 && i < n1 && v !== q) {
        i += 1;
    }
    console.log("m[" + i + "][" + j + "] = " + m[i][j]);
}