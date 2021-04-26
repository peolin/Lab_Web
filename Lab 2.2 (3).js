// JavaScript source code

let surname, name, sname, qs = new String(), answ = new Boolean();

function Question() {
    alert("Please, enter the 4 questions.");
    qs[0] = prompt("First question", '');
    qs[1] = prompt("Second question", '');
    qs[2] = prompt("Third question", '');
    qs[3] = prompt("Fourth question", '');
}

function Ask() {
    alert("Please, enter your full name.");
    surname = prompt("Surname: ", '');
    name = prompt("First name: ", '');
    sname = prompt("Second name: ", '');
    alert("Welcome, " + surname + ' ' + name + ' ' + sname);
}

//let myVar = setInterval(myTimer, 1000);

//function myTimer() {
//    var d = new Date();
//    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
//}

function Count() {
    //let q1 = confirm("The dialog box is a graphical control element in the form of a small window that communicates information to the user and prompts them for a response.");
    //let q2 = confirm("The simplest type of dialog box is the alert, which displays a message and may require an acknowledgment that the message has been read, usually by clicking 'OK', or a decision as to whether or not an action should proceed, by clicking 'OK' or 'Cancel'.");
    //let q3 = confirm("Modal dialog boxes don't have the ability to temporarily halt the program.");
    //let q4 = confirm("System modal dialog boxes prevent interaction with any other window onscreen and prevent users from switching to another application or performing any other action until the issue presented in the dialog box is addressed.");

    let res = 0;

    if ((answ[0] == true) & (answ[1] == true) & (answ[2] == false) & (answ[3] == true)) {
        res = 4;
    } else if (((answ[0] == false) & (answ[1] == true) & (answ[2] == false) & (answ[3] == true)) || ((answ[0] == true) & (answ[1] == false) & (answ[2] == false) & (answ[3] == true)) || ((answ[0] == true) & (answ[1] == true) & (answ[2] == true) & (answ[3] == true)) || ((answ[0] == true) & (answ[1] == true) & (answ[2] == false) & (answ[3] == false)) ){
        res = 3;
    } else if (((answ[0] == false) & (answ[1] == false) & (answ[2] == false) & (answ[3] == true)) || ((answ[0] == true) & (answ[1] == true) & (answ[2] == true) & (answ[3] == false)) || ((answ[0] == true) & (answ[1] == false) & (answ[2] == true) & (answ[3] == true)) || ((answ[0] == false) & (answ[1] == true) & (answ[2] == false) & (answ[3] == false))) {
        res = 2;
    } else if (((answ[0] == true) & (answ[1] == false) & (answ[2] == true) & (answ[3] == false)) || ((answ[0] == false) & (answ[1] == false) & (answ[2] == true) & (answ[3] == true)) || ((answ[0] == false) & (answ[1] == false) & (answ[2] == false) & (answ[3] == false)) || ((answ[0] == false) & (answ[1] == true) & (answ[2] == true) & (answ[3] == false))) {
        res = 1;
    } else res = 0;
    alert(surname + ' ' + name + ' ' + sname + " your result is: " + res + " points.");
}

