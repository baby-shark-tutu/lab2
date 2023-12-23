function count() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let number3 = parseInt(document.getElementById('number3').value);
    let count_even_numbers = 0;
    let count_odd_numbers = 0;

    if (number1 % 2 == 0) {
        count_even_numbers += 1;
    }   else {
        count_odd_numbers += 1;
    }
    if (number2 % 2 == 0) {
        count_even_numbers += 1;
    }   else {
        count_odd_numbers += 1;
    }
    if (number3 % 2 == 0) {
        count_even_numbers += 1;
    }   else {
        count_odd_numbers += 1;
    }
    document.getElementById('result2').innerHTML = 'Количество четных чисел: ' + String(count_even_numbers) + 
    ' Количество нечетных чисел: ' + String(count_odd_numbers);
}