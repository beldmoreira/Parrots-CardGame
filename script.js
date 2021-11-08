const numeroMaximo = 14
let primeiraCarta= null
let processandoClique =false


function iniciarJogo(){
    let numeroCartas= selecionarNumero()
    const classCartas = ["rock","unicornio","bob","fiesta","papagaioPescoço","trigemios","marinheiro"]
    let remocaoPares = (numeroMaximo-numeroCartas)/2
    for(let i=0;i< remocaoPares;i++){
    const lista = document.querySelectorAll(`.${classCartas[i]}`) 
    for (var item of lista) {
        item.remove()
    } 
    }
    let cartas = document.querySelectorAll(".container > .card")
    let cartasArray=Array.from(cartas)
    cartasArray.sort(comparador);
    let container = document.querySelector(".container")
    for (var item of cartasArray) {
    container.appendChild(item)
    }
} 

function comparador() { 
	return Math.random() - 0.5; 
}

function selecionarNumero(){
    let numeroCartas = prompt("Com quantas cartas você quer jogar?")
    let numeroValido = (numeroCartas % 2 == 0) && (numeroCartas >= 4) && (numeroCartas <= numeroMaximo)
    let numeroInvalido = !numeroValido
    while(numeroInvalido){
        numeroCartas = prompt("Este número é inválido. Escolha números pares de 4 a 14. Com quantas cartas você quer jogar?")
        numeroValido = (numeroCartas % 2 == 0) && (numeroCartas >= 4) && (numeroCartas <= numeroMaximo)
        numeroInvalido = !numeroValido
       
    }
    return parseInt(numeroCartas)
}

function clicarCarta(card) {
    if(processandoClique){
       return 
    }
    if(card== primeiraCarta)
        return
    processandoClique= true

    if (primeiraCarta == null){
        primeiraCarta = card
        processandoClique = false;

    }
    else {
        let tipoPrimeiraCarta = document.querySelectorAll("")
        let =Array.from()
        card.classList.contains();
        //Checagem se a carta é o par
        //se não for o par, virar as duas com intervalo de 1s
        //se for par, deixar as duas viradas
        //setInterval(function, 1000);      
    }

    virarCarta(card)
}

function virarCarta(card){
    //const carta = document.querySelector("");
    card.classList.add("virado");

}

alert("Você ganhou em X jogadas!")

iniciarJogo()