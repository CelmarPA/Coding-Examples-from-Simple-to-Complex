// let a = 'abcdef';
// let b = a.split('');

let b = ['a', 'b', 'c', 'd', 'e', 'f'];
let n = b.length;
let c = [];

for(let i = 0; i < n; i++) {
    c[i] = b[n-i-1];
}

console.log(c);