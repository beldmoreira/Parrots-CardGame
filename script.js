const numeroMaximo = 14

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
 
 // Embaralhá-las
 // Dispor a quantidade escolhida

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

//function virarCarta(){
    // Inicialmente, as cartas devem estar viradas para baixo

    // 
//}

function comparador() { 
	return Math.random() - 0.5; 
}
//minhaArray.sort(comparador);
iniciarJogo()