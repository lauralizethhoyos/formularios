function nota(){

    let numeroUno= parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos=parseInt(document.getElementById('txtNumeroDos').value);
    let numeroTres=parseInt(document.getElementById('txtNumeroTres').value);


    let nota1=numeroUno*0.3;
    let nota2=numeroDos*0.3;
    let nota3=numeroTres*0.4;

    let result=nota1+nota2+nota3;

    document.getElementById('prome').innerHTML="<strong>"+result+"</strong>";

    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';
    

    return false;
}