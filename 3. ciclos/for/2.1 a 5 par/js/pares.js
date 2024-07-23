function numeropares() {
    let numeros = parseInt(document.getElementById('txtNumUno').value);
    let numRepet = "";

    for (let contar = 1; contar <= numeros; contar++) {
        if (contar % 2 == 0) {
            numRepet += contar + " Par <br>";
        } else {
            numRepet += contar + " Impar <br>";
        }
    }

    document.getElementById('paresoim').innerHTML = '<strong>' + numRepet + '</strong>';
    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';

    return false;
}
