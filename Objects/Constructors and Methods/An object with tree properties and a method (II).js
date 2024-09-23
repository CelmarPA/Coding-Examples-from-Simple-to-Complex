// This example creates an object with three properties.
// The cx property is a method.

let obj = {
    ax: "this",
    bx: "text",
    cx: function(g) {
        let t = "";
        t = this.ax + g + this.bx.length;
        return t;
    }
}

console.log(obj.cx("-"));
console.log(obj.ax);
console.log(obj.bx);
obj.ax = "super";
obj.bx = "string";
console.log(obj.ax);
console.log(obj.bx);
console.log(obj.cx("+"));