let a = ["a", "b", "c"];

let b = [
        [0, 1, 0],
        [1, 1, 1],
        [0, 1, 0]
        ];
        
let c = { "c1": a, "c2": b, "c3": 42 };

let obj = { "v1": a, "v2": b, "v3": c };

let txt = JSON.stringify(obj);

console.log(txt);