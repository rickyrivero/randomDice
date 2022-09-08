let dado = document.getElementById("dado");
let imagen = document.createElement("img");

function numRandom(){
    return Math.ceil(Math.random()* 6);
}

function lanzarDado(){
    dado.removeChild(dado.firstChild);
    imagen.src = "img/dado" + numRandom()+".png";
    imagen.width ="200";
    dado.appendChild(imagen);
}