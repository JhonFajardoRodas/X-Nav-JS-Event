// Companion code to form-5.html

// Set up function, to attach to onLoad
function setup () {
    formElement = document.getElementById('text');
    celdaElement = document.getElementById('celda');
    formElement.addEventListener('input', handler);
}
// Handler function, to provide to addEventListener
handler = function (e) {
    celdaElement.style.backgroundColor = this.value;
};
