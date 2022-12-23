
var textarea_entrada = document.getElementById("textarea_entrada");
var textarea_salida = document.getElementById("textarea_salida");
var button_encriptar = document.getElementById("button_encriptar");
var button_desencriptar = document.getElementById("button_desencriptar");


function f_encriptar(evento){
    var mensaje1=document.getElementById("textarea_entrada").value;
    var mensaje2="";
    var longitud = document.getElementById("textarea_entrada").value.length;
    var i=0;
    
    while(i<=longitud){

        if(mensaje1.substr(i, 1) == "e"){
            mensaje2 = mensaje2 + "enter";
        }
        else if(mensaje1.substr(i, 1) == "i"){
            mensaje2 = mensaje2 + "ines";
        }
        else if(mensaje1.substr(i, 1) == "a"){
            mensaje2 = mensaje2 + "ai";
        }
        else if(mensaje1.substr(i, 1) == "o"){
            mensaje2 = mensaje2 + "ober";
        }
        else if(mensaje1.substr(i, 1) == "u"){
            mensaje2 = mensaje2 + "ufat";
        }
        else {
            mensaje2 = mensaje2 + mensaje1.substr(i, 1);
        }

        i=i+1;
    }

    evento.preventDefault();
    document.getElementById("textarea_salida").value = mensaje2;
}


function f_desencriptar(evento)
{
    var mensaje1=document.getElementById("textarea_entrada").value;
    var mensaje2="";

    mensaje2 = mensaje1;
    mensaje2 = mensaje2.replaceAll("enter", "e");
    mensaje2 = mensaje2.replaceAll("imes", "i");
    mensaje2 = mensaje2.replaceAll("ai", "a");
    mensaje2 = mensaje2.replaceAll("ober", "o");
    mensaje2 = mensaje2.replaceAll("ufat", "u");

    evento.preventDefault();
    document.getElementById("textarea_salida").value = mensaje2;

}  


button_encriptar.onclick = f_encriptar;
button_desencriptar.onclick = f_desencriptar;
