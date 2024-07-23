function tablamulti() {
    let numeros = parseInt(document.getElementById('txtNumUno').value);
    let contar = 1;
    let numRepet = "";


    while (contar <= numeros) {

        numRepet += `5 x ${contar} = ${5 * contar}<br>`;
        contar = contar + 1;

    }

    document.getElementById('tabla5').innerHTML = '<strong>' + numRepet + '</strong>';

    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';
    
    return false;
}

