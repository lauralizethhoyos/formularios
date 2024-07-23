function numeros(){
    let NumUno = parseInt(document.getElementById('txtNumUno').value);
    let NumDos = parseInt(document.getElementById('txtNumDos').value);
    let num;
    if(NumUno==NumDos){
        num = "Los numeros son iguales";
    }else if(NumUno<NumDos){
        num = NumDos+ " es el numero mayor";
    }else if(NumDos<NumUno)
        num = NumUno+ " es el numero mayor";
        else{
            num = "Error"; }

    document.getElementById('numeross').innerHTML = '<strong>' +num+ '</strong>';
    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';
    return false;
}
