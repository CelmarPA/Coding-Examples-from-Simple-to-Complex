// txt to hex by replacing each character with the hex code in the same
// element of the array

let a = ".~ text".split("");

for (let i = 0; i < a.length; i++) {
    a[i] = a[i].charCodeAt(0).toString(16);
    a[i] = a[i].length < 2 ? "0" + a[i] : a[i];
}

console.log(a);