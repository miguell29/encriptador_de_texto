
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
var entrada = document.querySelector("#input-texto");
var textoEntrada =entrada.value
var botonEncriptar =document.querySelector("#btn-encriptar");
var letraCambiada = "";
var textoEncriptado ="";
var boton = document.querySelector("button")
    function compararEntrada(letra){
        if (letra === "e"){
           return letraCambiada ="enter";
        }   else {
            if (letra === "i"){
                return letraCambiada ="imes";
             }   else {
                if (letra === "a"){
                    return letraCambiada ="ai";
                 }   else {
                    if (letra === "o"){
                        return letraCambiada ="ober";
                     }   else if (letra === "u"){
                        return letraCambiada ="ufat";
                     }  else{
                         letraCambiada=letra;
                         return letraCambiada;
                     }  
                 }
             }
        }



       
   a }


    function encriptar(){
        textoEntrada = entrada.value;
        for(var i = 0; i< textoEntrada.lenght; i++){
            compararEntrada(textoEntrada[i]);
            textoEncriptado = textoEncriptado +letraCambiada;
            return textoEncriptado;
        }
        console.log(textoEncriptado);
    }