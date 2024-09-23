// Double Brute Force Algorithm (DBFA)

let x = Block_Alocation(133);
console.log(x);

function Block_Alocation(L) {

    let v, r;
    let a = 1;
    let b = 1;
    let t = 5; // min block length
    let m = 8; // max block length

    do {
        a = a + 1;
        t = (L % a);
        r = (L - t);
        v = r % 2;
        t++;
    }
    while (t > 3 && v === 0);

    do {
        m = m + 1;
        b = r % m;
    }
    while (b === 0 || m > 1000);

    return m;
}