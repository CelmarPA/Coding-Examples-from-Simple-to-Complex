// txt to hex by in a function that recives a as argument

let a = ".~ text".split("");
console.log(hex(a));

function hex(a) {
    for (let i in a) {
        a[i] = a[i].charCodeAt(0).toString(16);
        a[i] = a[i].length < 2 ? "0" + a[i] : a[i];
    }
    return a;
}
