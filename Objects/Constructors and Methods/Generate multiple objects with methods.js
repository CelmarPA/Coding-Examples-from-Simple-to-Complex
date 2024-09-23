// Using an object constructor and methods.

function obj(a) {
    
    this.AV = 0;
    this.SD = 0;
    this.CV = 0;
    this.dx = function(a) {

        let n = a.length;
        let b = 0;
        let e = 0;
        let j = 0;

        for(j = 0; j < n; j++) {
            b += a[j];
        }

        x = b / n;

        for(j = 0; j < n; j++) {
            e += Math.pow((a[j] - x), 2);
        }

        let s = Math.sqrt(e / (n - 1));
        let c = s / x;

        this.AV = x;
        this.SD = s;
        this.CV = c;
    }
}

let a = [5, 6, 2, 9, 44, 200];
let b = [7, 4, 6, 8, 6, 4];

let box1 = new obj();
let box2 = new obj();

box1.dx(a);
box2.dx(b);

console.log("box 1 - AV: " + box1.AV);
console.log("box 1 - SD: " + box1.SD);
console.log("box 1 - CV: " + box1.CV);
console.log("--------------------------------");
console.log("box 2 - AV: " + box2.AV);
console.log("box 2 - SD: " + box2.SD);
console.log("box 2 - CV: " + box2.CV);