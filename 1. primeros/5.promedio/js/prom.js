function prom(){

    let numeroUno= parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos=parseInt(document.getElementById('txtNumeroDos').value);
    let numeroTres=parseInt(document.getElementById('txtNumeroTres').value);
    let pro;


    pro=(numeroUno+numeroDos+numeroTres)/3;

    document.getElementById('promedion').innerHTML="<strong>"+pro+"</strong>";
    
    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';
    

    return false;
}