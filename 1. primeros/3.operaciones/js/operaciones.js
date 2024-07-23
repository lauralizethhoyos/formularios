function resta() {
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    let operacion = document.getElementById('operacion').value;
    let total;

    if (operacion === 'resta') {
        total = numeroUno - numeroDos;
    } else if (operacion === 'multiplicacion') {
        total = numeroUno * numeroDos;
    } else if (operacion === 'division') {
        total = numeroUno / numeroDos;
    } else {
        total = 'Hiciste mal la operacion';
    }

    document.getElementById('resultado').innerText = 'Resultado: ' + total;

    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';
    
    return false;
}
