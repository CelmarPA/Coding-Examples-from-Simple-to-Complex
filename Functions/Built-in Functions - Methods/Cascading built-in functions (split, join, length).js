var a = "----##----------##--------";
q = "##";

b = a.length;
c = a.split(q).join("").length;

if(c < b) {
    console.log("a contains q");
}