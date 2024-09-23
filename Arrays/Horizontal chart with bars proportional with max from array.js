let a = [5, 2, 8, 4, 6, 22, 8, 9];

let m = 15;
let c = '#';
let t = '';
let max = 0;

let n = a.length;

for(let i = 0; i < n; i++) {
    if(a[i] > max) {
        max = a[i];
    }
} 

for(let i =0; i < n; i++) {

    f = Math.floor((m / max) * a[i]);

    for(let k = 0; k < f; k++) {
        t += c;
    }
    t += "\n";
}

console.log(t);