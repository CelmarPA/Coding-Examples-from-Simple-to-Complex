var a = 0;
var m = 3;
var n = 5;

for(var j = 1 ; j <= m; j++) {
    for(var i = 1; i <= n; i ++) {
        a = a + (i + j * m);
    } 
}

console.log(a);