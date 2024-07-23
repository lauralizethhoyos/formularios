function saludo(){
    let saludar;

    saludar = document.getElementById('textSaludo').value;

    document.getElementById('saludo').innerHTML = '<strong>' +saludar+ '</strong>';

    
    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';
    
    return false;
}