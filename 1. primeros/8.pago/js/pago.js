function total1(){
    let valorUno = parseInt(document.getElementById('txtNumUno').value);
    let valorDos= parseInt(document.getElementById('txtNumDos').value);
    
    let total=valorUno*valorDos;

    let salud=total*0.12;

    let pension=total*0.16;

    let arl= total*0.052;

    let deducible= salud+pension+arl;

    let salario=total-deducible;

    document.getElementById('total').innerHTML = '<strong>' +salario+'</strong>';
    
    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';
    

    return false;
}

