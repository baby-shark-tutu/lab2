function check() {
    let number = parseInt(document.getElementById('number').value);
    let str = String(number)
    if (str[0] == str[1]) {
        document.getElementById('result1').innerHTML = 'Первая и вторая цифры одинаковые';
    }   else {
        document.getElementById('result1').innerHTML =  'Первая и вторая цифры разные';
    }
};