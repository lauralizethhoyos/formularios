function edad(){
    let NumUno = parseInt(document.getElementById('txtNumUno').value);

    if(NumUno>=18){
        edad = "Mayor de edad";
    }else{
        edad = "Menor de edad"
    }

    document.getElementById('edad').innerHTML = '<strong>' +edad+ '</strong>';
    
    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';
    return false;
}