const numeroMaximo = 14
let primeiraCarta= null
let processandoClique =false
const classCartas = ["rock","unicornio","bob","fiesta","papagaioPescoço","trigemios","marinheiro"]
let paresEncontrados= 0
let paresDisponiveis = 0
let contadorDeCliques=0

function iniciarJogo(){
    let numeroCartas= selecionarNumero()
    let remocaoPares = (numeroMaximo-numeroCartas)/2
    paresDisponiveis= (numeroCartas/2)
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

    if(card.classList.contains("virado"))
        return
    if(processandoClique){
       return 
    }
    if(card== primeiraCarta)
        return
    processandoClique= true
    contadorDeCliques++
    if (primeiraCarta == null){
        primeiraCarta = card
        processandoClique = false;

    }
    else {
        let tipoPrimeiraCarta = classCartas.filter(
            function(x){
              return primeiraCarta.classList.contains(x)
            })[0]
        if(card.classList.contains(tipoPrimeiraCarta)){
            primeiraCarta = null;
            processandoClique = false;
            paresEncontrados++
            if(paresEncontrados==paresDisponiveis)
            {
              setTimeout(
                  function(){
                      alert(`Você ganhou em ${contadorDeCliques} jogadas!`)
                    },1000
                )
                let reiniciar = prompt("Você gostaria de reiniciar a partida? Digite sim ou não" )
                if (reiniciar == "sim")
                location.reload(true); 
            }

        } else{
          setTimeout(
            function(){
              card.classList.remove("virado")
              primeiraCarta.classList.remove("virado")
              primeiraCarta = null
              processandoClique = false 
            },
            1000
          );        
        }    
    }
    virarCarta(card)
}

function virarCarta(card){
    card.classList.add("virado");
}

iniciarJogo()