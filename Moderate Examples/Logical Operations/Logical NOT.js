console.log('1 -> ' + f_not(1));
console.log('0 -> ' + f_not(0));

function f_not(a) {
    return 1 - a;
}

/*
function f_not(a) {
    return (a + 1) % 2;
}

function f_not(a) {
    if (a === 1) { a = 0; } else { a = 1; }
    return a;
}
*/