b = [];

function permute(s, a) {
    if (s.length === 0) {
        b.push(a);
    }

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        let l = s.slice(0, i); // left
        let r = s.slice(i + 1); // rigth
        let q = l + r;
        permute(q, a + c);
    }
}

let s = "ABC";
let a = "";
permute(s, a);
console.log(b); 