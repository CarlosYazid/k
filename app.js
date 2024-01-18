
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let input = document.getElementById("number");
let titulo = document.querySelector("h1");
let parrafo = document.querySelector("p");

titulo.innerHTML = "Adivina el numero secreto";
parrafo.innerHTML = "Introduce un numero del 1 al 10";

function indications(numero, numeroSecreto) {

    if (numero > numeroSecreto) {
        parrafo.innerHTML = "El numero secreto es menor";
    } else {
        parrafo.innerHTML = "El numero secreto es mayor";
    }

}


function game(status) {

    let numero = parseInt(input.value);

    if (!(status)) {
        numeroSecreto = Math.floor(Math.random() * 10) + 1;
        console.log(numberUser.value);
    }

    if (numero == numeroSecreto) {
        titulo.innerHTML = "Has ganado";
        parrafo.innerHTML = "El numero secreto era " + numeroSecreto;
    } else {
        indications(numero, numeroSecreto);
        //game(true);
    }

}