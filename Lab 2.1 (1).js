// JavaScript source code

let num1, num2, res;

function Ask() {
    alert('Please, enter 2 negative numbers');
    let num1 = prompt('First negative number', '');
    if ((num1 < 0) & (num1 % 1 == 0)) alert('Entered number is correct.')
    else alert('You have entered incorrect number.');

    let num2 = prompt('Second negative number', '');
    if ((num2 < 0) & (num2 % 1 == 0)) alert('Entered number is correct.')
    else alert('You have entered incorrect number.');
}

function Summ() {
    res = 0;
    alert('fail');
    for (let i = 0; i < Math.abs(num1 - num2); i++) {
        if (i % 1 == 0) {
            res = res + i
        }
    }
    alert('The result is: ' + res);
}

