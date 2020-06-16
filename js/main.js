// RELOJ HORA ESPAÑOLA !! 

//con esta funcion añadimos el 0 al formato
function ponerCero(i){
    if (i < 10){
        i = '0' + i;
    }
    return i;
}

// funcion que recoge los datos de horas minutos y segundos
function reloj() {
    var fechaHora = new Date();

    h = fechaHora.getHours();
    m = fechaHora.getHMinutes();
    s = fechaHora.getSeconds();

    h = PonerCero(h);
    m = PonerCero(m);
    s = PonerCero(s);

    //llama al div id que tenemos en el html
    var divReloj =document.getElementById('reloj');
    divReloj.innerHTML = `${h}:${m}:${s}`;

    //lo ponemos a medio segundo para que nunca de tiempo a desincronizacion
    setTimeout('reloj()', 500);
}
    reloj();
