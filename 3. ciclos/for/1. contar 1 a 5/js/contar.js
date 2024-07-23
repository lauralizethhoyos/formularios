function contarnum(){
    let numero = parseInt(document.getElementById('txtNumUno').value);
    let contar=0;
    let numRepet="";
    
    while(contar<=numero){
        numRepet+=contar+"-";
        contar=contar+1;
    }

    document.getElementById('contarn').innerHTML = '<strong>' +numRepet+'</strong>';

    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';

    return false;
}

