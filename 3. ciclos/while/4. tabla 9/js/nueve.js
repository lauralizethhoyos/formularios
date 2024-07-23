function tablamulti9() {
    let nums = parseInt(document.getElementById('txtNumUno').value);

    let cont = 1;
    let numRe = "";
    let result;

    while (cont <= nums) {
        result = cont * 9;

        if (result % 2 == 0) {
            numRe += result + " es par <br>";
        } else {
            numRe += result + " es impar <br>";
        }

        cont = cont + 1;
    }

    document.getElementById('tabla9').innerHTML = '<strong>' + numRe + '</strong>';

    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';

    return false;
}