var m = [
    [2, 4, 6],
    [3, 5 ,6],
    [3, 5, 4]
    ];

var s = 3; // Scalar
var r = "";

for(var i = 0; i < m.length; i++) {
    for(var j = 0; j < m[i].length; j++) {
        m[i][j] = s * m[i][j];
        // m[i][j] *= s;
        r += m[i][j] + ", ";
    }
}

r = r.slice(0, -2); // Remove the last comma

console.log(r);