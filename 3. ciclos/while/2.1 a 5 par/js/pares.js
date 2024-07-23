function numeropares(){
    let numeros = parseInt(document.getElementById('txtNumUno').value);
    let contar=0;
    let numRepet="";
    while(contar<numeros){

        
        contar=contar+1;
        if(contar%2==0){
            numRepet+=contar+" Par <br>" ;
        }else{
            numRepet+=contar+" Impar <br>";
        }
    }

    document.getElementById('paresoim').innerHTML = '<strong>' +numRepet+'</strong>';

    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';

    return false;
}