var m = [
        [2, 4, 6],
        [3, 5 ,6],
        [3, 5, 4]
        ];

var r = 0;

for(var i = 0; i < m.length; i++) {
    for(var j = 0; j < m[i].length; j++) {
        r += m[i][j];
    }
}

console.log(r);