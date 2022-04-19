let contador = 1;

setInterval( function(){
    document.getElementById('slide' + contador).checked = true;
    contador++;

    if(counter > 5 ) {
        contador = 1;
    }
}, 3000 );