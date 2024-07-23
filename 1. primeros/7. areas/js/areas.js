function areas(){

    let medidaUno= parseInt(document.getElementById('txtNumeroUno').value);
    let medidaDos=parseInt(document.getElementById('txtNumeroDos').value);
    let figura= document.getElementById('figuraN').value;
    let resulta;

    if(figura === 'cuadrado'){
        resulta=medidaUno*medidaDos;
    }else if(figura ==='rectangulo'){
        resulta=medidaUno*medidaDos;
    }else if(figura === 'triangulo'){
        resulta=(medidaUno*medidaDos)/2;
    }else{
        resulta='no se encuantra la operacion';
    }

    document.getElementById('area').innerHTML="<strong>"+resulta+"</strong>";

    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';
    

    return false;
}