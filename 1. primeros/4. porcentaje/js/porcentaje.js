function porce(){

    let numeroUno= parseInt(document.getElementById('txtNumeroUno').value);
    let porcenta;


    porcenta=numeroUno/100;

    document.getElementById('porcen').innerHTML="<strong>"+porcenta+"</strong>";

    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';
    

    return false;
}