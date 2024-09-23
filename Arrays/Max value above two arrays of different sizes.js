var a = [2, 3, 4, 5, 9, 8, 3];
var b = [14, 2, 3, 41, 5, 6, 77];
var l = [];

l[0] = a.length;
l[1] = b.length;

var r = l[0];
if(l[0] < l[1]) {
    r = l[1];
}

var max = 0;

for(var k = 0; k <= r; k++) {
    if(k < l[0] && max < a[k]) {
        max = a[k];
    }
    if(k < l[1] && max < b[k]) {
        max  = b[k];
    }
}

console.log(max);