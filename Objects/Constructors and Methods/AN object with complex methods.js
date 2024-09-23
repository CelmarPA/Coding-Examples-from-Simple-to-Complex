let obj = {

    AV: 0,
    SD: 0,
    CV: 0,
    dx: function(a) {
        
        let n = a.length;
        let b = 0;
        let e = 0;
        let j = 0;

        for(j = 0; j < n; j++) {
            b += a[j];
        }

        let x = b / n;

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

obj.dx(a);

console.log("AV: " + obj.AV);
console.log("SD: " + obj.SD);
console.log("CV: " + obj.CV);