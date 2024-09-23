a =  for_loop(0, 7, 0);
console.log(a);

// Replacement for reapet loops
function for_loop(a, b, r) {

    a++;
    // Do stuff from
    r += 5;
    // To here

    if(a >= b) {
        return r;
    } else {
        return for_loop(a, b, r);
    }
}