var a = [
        [2, 4, 6],
        [3, 5, 6],
        [3, 5, 4]
        ];

var b = [
        [2, 4, 6],
        [3, 5, 6],
        [3, 5, 4]
        ];

var c = [];
var r = "";

for(var i = 0; i < a.length; i++) {

    r += "\n";
    c[i] = [];

    for(var j = 0; j < a[i].length; j++) {

        c[i][j] = 0;

        for(var k = 0; k < a[i].length; k ++) {
            c[i][j] += a[k][j] * b[i][k];
        }
        r += c[i][j] + " ";
    }
}

console.log(r);