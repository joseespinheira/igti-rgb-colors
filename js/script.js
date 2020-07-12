var r = g = b = 25;

window.addEventListener("load", start);

function start() {

    var red = document.querySelector('#red');
    var green = document.querySelector('#green');
    var blue = document.querySelector('#blue');

    red.addEventListener("input", eventoRed);
    green.addEventListener("input", eventoGreen);
    blue.addEventListener("input", eventoBlue);

}
function eventoRed() {
    r = document.querySelector('#ired').value = document.querySelector('#red').value
    document.querySelector('#cor').style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
function eventoGreen() {
    g = document.querySelector('#igreen').value = document.querySelector('#green').value
    document.querySelector('#cor').style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
function eventoBlue() {
    b = document.querySelector('#iblue').value = document.querySelector('#blue').value
    document.querySelector('#cor').style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
}