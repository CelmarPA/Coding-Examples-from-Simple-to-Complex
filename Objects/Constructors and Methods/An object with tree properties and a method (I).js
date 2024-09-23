// This example creates an object with three properties.
// The cx property is a method.

let obj = {
    ax: "this",
    bx: "text",
    cx: function() {
        return this.ax + " " + this.bx;
    }
}

console.log(obj.cx());