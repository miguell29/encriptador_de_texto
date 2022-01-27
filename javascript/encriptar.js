botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var entrada = document.querySelector("#input-texto")
    var textoEntrada =entrada.value.split("");
    for(var i=0;i <textoEntrada.length ; i++){
        comparaLetra(textoEntrada[i]);
    }
    entrada.value = "";
    setTimeout(mostrarMsjEncriptado(),500);
})
