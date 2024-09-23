var a = 0; 
var m = 5; 
var n = 7;

for(var j = 1; j <= m; j++) {
    for(var i = j; i <= n; i++) {
        a = a + (i + j * m);
    }
}

console.log(a);