function suma(){

    let numeroUno= parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos=parseInt(document.getElementById('txtNumeroDos').value);
    let sumar;


    sumar=numeroUno+numeroDos;

    document.getElementById('suma').innerHTML="<strong>"+sumar+"</strong>";

    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';

    return false;
}