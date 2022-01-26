var botonDesencriptar = document.querySelector("#btn-desencriptar");

botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var entrada = document.querySelector("#input-texto")
    var textoEntrada = entrada.value;
    var textoSalida =textoEntrada.replace(/ai/gi,"a").replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    entrada.value ="";
    mensaje.value = textoSalida;

})