// JavaScript source code

function blink() {
    let blinks = document.getElementById('Text');
    setInterval(function () {
        blinks.style.display = (blinks.style.display == 'none' ? '' : 'none');
    }, 1000);
}
