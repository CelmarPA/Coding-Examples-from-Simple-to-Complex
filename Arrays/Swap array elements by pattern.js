// swap array elements by pattern

var a = [2, 3, 4, 5, 9, 8, 3];
var b = [1, 2, 3, 4, 5, 6, 7];
var c = [0, 1, 1, 0, 0, 0, 1];
var l = a.length;

for(let k = 0; k < l; k++) {

    let t = 0;

    if(c[k] === 1) {
        t = a[k];
        a[k] = b[k];
        b[k] = t;
    }
}

console.log("a = " + a);
console.log("b = " + b);