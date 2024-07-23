function calcular(birthdate){
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 ||(monthDiff=== 0 && today.getDate() < birthdate.getDate())){
        age--;
    }
    return age;
}
function calcularEdad(){
    const fechaNac=new Date(document.getElementById('txtfecha').value);
    const edad=calcular(fechaNac);
    let tipoEdad;
    if(edad>17){
        tipoEdad="Es mayor de edad";
    }
    else{
        tipoEdad="Es menor de edad";
    }


document.getElementById('edad').innerHTML='<strong>'+edad+' es '+tipoEdad+'</strong>';

document.getElementById('imagen').innerHTML = '<img src="img/hello.jpg">';

return false;
}
