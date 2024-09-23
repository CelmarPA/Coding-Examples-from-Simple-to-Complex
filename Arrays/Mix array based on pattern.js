// mix array based on pattern

var a = [2, 3, 4, 5, 9, 8, 3]; // 1
var b = [1, 2, 3, 4, 5, 6, 7]; // 0
var c = [0, 1, 1, 0, 0, 0, 1];
var l = a.length;

for(let k = 0; k < l; k++) {

    if(c[k] === 1) {
        c[k] = a[k];
    } else {
        c[k] = b[k];
    }
}

console.log("c = " + c);