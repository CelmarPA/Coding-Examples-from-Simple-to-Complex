function obj(a, b, c, d) {
    this.ax = a.split('');
    this.bx = this.ax.length;
    this.cx = c - b;
    this.dx = d * c;
}

let o1 = new obj("some", 66, 50, 77);
let o2 = new obj("text", 85, 48, 77);

console.log(o1.ax + " | " + o2.ax);
console.log(o1.bx + " | " + o2.bx);
console.log(o1.cx + " | " + o2.cx);
console.log(o1.dx + " | " + o2.dx);

o1.bx = 100;

console.log(o1.bx + " | " + o2.bx);