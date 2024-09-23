let a = distribution(3, 21);
console.log(a);

function distribution(start, stop) {

    let t = "";

    for (let i = start; i < stop; i++) {
        t += compute(i) + "\n";
    }

    return t;
}

function compute(x) {
    return x + x / x - x * x;
}