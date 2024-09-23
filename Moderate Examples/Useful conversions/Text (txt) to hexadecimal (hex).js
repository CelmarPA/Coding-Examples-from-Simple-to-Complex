// txt to hex

let a = ".~ text";
let b = "";
let c = [];

for (let i = 0; i < a.length; i++) {
    b = a.charCodeAt(i).toString(16);
    c[i] = b.length < 2 ? "0" + b : b;

    // if (b.length < 2) {
    //     c[i] = "0" + b;
    // } else {
    //     c[i] = b;
    // }
}
console.log(c);
