// JavaScript source code

let surname, name, sname;
function Ask() {
    alert("Please, enter your full name.");
    surname = prompt("Surname: ", '');
    name = prompt("First name: ", '');
    sname = prompt("Second name: ", '');
    alert("Welcome, " + surname + ' ' + name + ' ' + sname);
}

function Test() {
    let q1 = confirm("The dialog box is a graphical control element in the form of a small window that communicates information to the user and prompts them for a response.");
    let q2 = confirm("The simplest type of dialog box is the alert, which displays a message and may require an acknowledgment that the message has been read, usually by clicking 'OK', or a decision as to whether or not an action should proceed, by clicking 'OK' or 'Cancel'.");
    let q3 = confirm("Modal dialog boxes don't have the ability to temporarily halt the program.");
    let q4 = confirm("System modal dialog boxes prevent interaction with any other window onscreen and prevent users from switching to another application or performing any other action until the issue presented in the dialog box is addressed.");

    let res = 0;

    if ((q1 == true) & (q2 == true) & (q3 == false) & (q4 == true)) {
        res = 4;
    } else if (((q1 == false) & (q2 == true) & (q3 == false) & (q4 == true)) || ((q1 == true) & (q2 == false) & (q3 == false) & (q4 == true)) || ((q1 == true) & (q2 == true) & (q3 == true) & (q4 == true)) || ((q1 == true) & (q2 == true) & (q3 == false) & (q4 == false)) ){
        res = 3;
    } else if (((q1 == false) & (q2 == false) & (q3 == false) & (q4 == true)) || ((q1 == true) & (q2 == true) & (q3 == true) & (q4 == false)) || ((q1 == true) & (q2 == false) & (q3 == true) & (q4 == true)) || ((q1 == false) & (q2 == true) & (q3 == false) & (q4 == false))) {
        res = 2;
    } else if (((q1 == true) & (q2 == false) & (q3 == true) & (q4 == false)) || ((q1 == false) & (q2 == false) & (q3 == true) & (q4 == true)) || ((q1 == false) & (q2 == false) & (q3 == false) & (q4 == false)) || ((q1 == false) & (q2 == true) & (q3 == true) & (q4 == false))) {
        res = 1;
    } else res = 0;
    alert(surname + ' ' + name + ' ' + sname + " your result is: " + res + " points.");
}

