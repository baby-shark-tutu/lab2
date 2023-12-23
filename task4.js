function equations2() {
    let x = parseInt(document.getElementById('x').value);
    let y;
    let a = 1.24;
    let b = 5.17;

    switch(x) {
        case 1:
            y = a * Math.tan(b * x);
            document.getElementById('function').innerHTML = "y = atg(bx)";
            break;
        case 2:
            y = 1/x + Math.sin(b*x);
            document.getElementById('function').innerHTML = "y = 1/x + sin(bx)";
            break;
        case -1:
            y = Math.exp(-x + a);
            document.getElementById('function').innerHTML = "y = e^(-x + a)";
            break;
        default:
            document.getElementById('function').innerHTML = 'Нет таких значений!';
    }
    document.getElementById('y').innerHTML = "y = " + y;
}