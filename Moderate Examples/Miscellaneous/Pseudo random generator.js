let x = 3; // seed

console.log(prandom(x));

function prandom(x) {

    let a = 11;
    let m = 25;
    let c = 17;
    let r = "";

    for (let i = 0; i < 10; i++) {
        x = (a * x + c) % m;
        r += x + ","
    }
    return r;
}