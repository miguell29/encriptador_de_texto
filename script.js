
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 

// Reglas de desencriptación: 
//"enter" es convertido para "e" 
//"imes" es convertido para "i"
//"ai" es convertido para "a"
//"ober" es convertido para "o"
//"ufat" es convertido para "u"
//Solo letras minusculas
//No se permite acentuación de palabras
*/
var botonEncriptar = document.querySelector("#btn-encriptar");
var mensaje= document.querySelector("#msg");
var textoSalida="";



botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    let textoSalida ="";
    var entrada = document.querySelector("#input-texto")
    var textoEntrada =entrada.value.split("");
    for(var i=0;i <textoEntrada.length ; i++){
        comparaLetra(textoEntrada[i]);
    }
    entrada.value = "";
    setTimeout(mostrarMsjEncriptado(),500);
})

function mostrarMsjEncriptado(){
    mensaje.value = textoSalida;
    textoSalida = "";
}
function comparaLetra(letra){
    switch (letra) {
        case "a":
            textoSalida+="ai"
            break;
        case "e":
            textoSalida+="enter"
            break;
        case "i":
            textoSalida+="imes"
            break;
        case "o":
            textoSalida+="ober"
            break;
        case "u":
            textoSalida+="uber"
            break;
        default:
            textoSalida+=letra
            break;
    }
}


