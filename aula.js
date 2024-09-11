function calculos() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    parseFloat(a);
    parseFloat(b);
    console.log(a, b);
    let abso = (a) + (b);
    let absu = a-b;
    let abm = a*b;
    let abd = a/b;
    console.log(abso, absu, abm, abd);
}

