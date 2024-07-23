function tablamulti9() {
    let nums = parseInt(document.getElementById('txtNumUno').value);
    let numRe = "";

    for (let cont = 1; cont <= nums; cont++) {
        let result = cont * 9;

        if (result % 2 == 0) {
            numRe += result + " es par <br>";
        } else {
            numRe += result + " es impar <br>";
        }
    }

    document.getElementById('tabla9').innerHTML = '<strong>' + numRe + '</strong>';
    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';

    return false;
}
