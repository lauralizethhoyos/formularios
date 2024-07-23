function edades(){
    let NumUno = parseInt(document.getElementById('txtNumUno').value);
    let NumDos = parseInt(document.getElementById('txtNumDos').value);
    let NumTres = parseInt(document.getElementById('txtNumTres').value);
    let fecha = parseInt(document.getElementById('txtFecha').value);

    let edad1 = fecha-NumUno;
    let edad2 = fecha-NumDos;
    let edad3 = fecha-NumTres;
    let suma = edad1+edad2+edad3;
    let prom = suma/3;

    if(prom>=18){
        num = +prom+" El promedio de las edades son de la mayoria de edad";
    }else{
        num = +prom+" El promedio de las edades son de la minoria de edad"
    }

    document.getElementById('edades').innerHTML = '<strong>' +num+ '</strong>';

    document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';
    return false;
}


