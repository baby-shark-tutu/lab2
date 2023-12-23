function equations1() {
    let x = parseFloat(document.getElementById('x').value);
    let y;
    let a = 1.24;
    let b = 5.17;

    if (x >= 0 && x <= 1) {
        y = a * Math.tan(b * x);
        document.getElementById('function').innerHTML = "y = atg(bx)";
    }   else if (x > 1) {
            y = 1/x + Math.sin(b*x);
            document.getElementById('function').innerHTML = "y = 1/x + sin(bx)";
    }       else {
            y = Math.exp(-x + a);
            document.getElementById('function').innerHTML = "y = e^(-x + a)";
    }
    document.getElementById('y').innerHTML = "y = " + y;
};