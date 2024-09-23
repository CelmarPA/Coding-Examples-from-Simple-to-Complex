a = 16;

b = f(a); console.log(b);
p(); console.log(b);

function f(x) {
    return x + x / x - x * x; 
}

function p() {
    let x = a - 11;
    b = x + x / x - x * x;
}