function tablass() {
    let nums = parseInt(document.getElementById('txtNumUno').value);

    let cont = 0;
    let par = 0;
    let impar = 0;
    let table = document.getElementById('tabla');
    table.innerHTML = ''; 

    while (cont < nums) {
        cont++;
        let numRe = "";

        for (let numI = 1; numI <= 10; numI++) {
            let result = cont * numI;
            
            if (result % 2 === 0) {
                numRe += cont + " * " + numI + " = " + result + " es Buzz <br>";
                par++;
            } else {
                numRe += cont + " * " + numI + " = " + result + " es Bass <br>";
                impar++;
            }
        }

        table.innerHTML += '<div class="tabla-container"><h3 class="titulo_Tabla">Tabla del ' + cont + '</h3><p>' + numRe + '</p></div>';
    }

    table.innerHTML += '<p><strong>Pares: ' + par + '</strong></p>';
    table.innerHTML += '<p><strong>Impares: ' + impar + '</strong></p>';

    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';

    return false;
}
