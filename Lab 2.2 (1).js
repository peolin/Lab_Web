// JavaScript source code
let arr1 = [], arr2 = [], arr3 = [], arr4 = [];
function Ask() {
    let a, b, c;
    alert("Please, enter 4 elements for arrays");
    a = prompt("First element", '');
    b = prompt("Second element", '');
    c = prompt("Third element", '');
    d = prompt("Fourth element", '');
    alert(a + ' - ' + b + ' - ' + c + ' - ' + d);
    arr1 = a;
    arr2 = [a, b];
    arr3 = [a, b, c];
    arr4 = [a, b, c, d];
    //alert(arr1.length + ' ' + arr2.length + ' ' + arr3.length + ' ' + arr4.length);
    //alert(arr1[0] + ' - ' + arr1[1]);
}

function Show() {
    let sw = prompt("Choose 1 out of 4 arrays to display.", '');
    switch(sw)
    {
        case '1':
            if (arr1.length == 1) {
                alert("Array consists of 1 element " + arr1[0]);
            } else if (arr1.length == 2) {
                alert("Array consists of 2 elements: " + arr1[0] + ' and ' + arr1[1]);
            } else if (arr1.length > 2) {
                alert("Array consists of " + arr1.length + " elements: ");
                let resarr = '';
                let i = 0
                while (i < (arr1.length - 1)) {
                    resarr = resarr.concat(arr1[i], ', ');
                    i++;
                }
                resarr = resarr.concat('and ', arr1[arr1.length - 1]);
                alert(resarr);
            }
            break
        case '2':
            if (arr2.length == 1) {
                alert("Array consists of 1 element " + arr2[0]);
            } else if (arr2.length == 2) {
                alert("Array consists of 2 elements: " + arr2[0] + ' and ' + arr2[1]);
            } else if (arr2.length > 2) {
                alert("Array consists of " + arr2.length + " elements: ");
                let resarr = '';
                let i = 0
                while (i < (arr2.length - 1)) {
                    resarr = resarr.concat(arr2[i], ', ');
                    i++;
                }
                resarr = resarr.concat('and ', arr2[arr2.length - 1]);
                alert("Array consists of " + arr2.length + " elements: " + resarr);
            }
            break
        case '3':
            if (arr3.length == 1) {
                alert("Array consists of 1 element " + arr3[0]);
            } else if (arr3.length == 2) {
                alert("Array consists of 2 elements: " + arr3[0] + ' and ' + arr3[1]);
            } else if (arr3.length > 2) {
                let resarr = '';
                let i = 0
                while (i < (arr3.length - 1)) {
                    resarr = resarr.concat(arr3[i], ', ');
                    i++;
                }
                resarr = resarr.concat('and ', arr3[arr3.length - 1]);
                alert("Array consists of " + arr3.length + " elements: " + resarr);
            }
            break
        case '4':
            if (arr4.length == 1) {
                alert("Array consists of 1 element " + arr4[0]);
            } else if (arr4.length == 2) {
                alert("Array consists of 2 elements: " + arr4[0] + ' and ' + arr4[1]);
            } else if (arr4.length > 2) {
                let resarr = '';
                let i = 0
                while (i < (arr4.length - 1)) {
                    resarr = resarr.concat(arr4[i], ', ');
                    i++;
                }
                resarr = resarr.concat('and ', arr4[arr4.length - 1]);
                alert("Array consists of " + arr4.length + " elements: " + resarr);
            }
            break
        default:
            alert("Please, enter a number 1, 2, 3, or 4");
            break
    }
}
