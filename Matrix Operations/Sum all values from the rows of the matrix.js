var m = [
        [2, 4, 4],
        [3, 5, 6],
        [3, 5, 4]
        ];

var r = [];

for(var i = 0; i < m.length; i++) {

    r[i] = 0;

    for(var j = 0; j < m[i].length; j++) {
        r[i] += m[i][j];
        // r[i] *= m[i][j];
    }
}

console.log(r);