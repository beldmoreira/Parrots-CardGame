function selecionarNumero(){
    let numeroCartas = prompt("Com quantas cartas você quer jogar?")
    let numeroValido = (numeroCartas % 2 == 0) && (numeroCartas >= 4) && (numeroCartas <= 14)
    let numeroInvalido = !numeroValido
    while(numeroInvalido){
        numeroCartas = prompt("Este número é inválido. Escolha números pares de 4 a 14. Com quantas cartas você quer jogar?")
        numeroValido = (numeroCartas % 2 == 0) && (numeroCartas >= 4) && (numeroCartas <= 14)
        numeroInvalido = !numeroValido
       
    }
    return numeroCartas
}

// function virarCarta(){

//}

function comparador() { 
	return Math.random() - 0.5; 
}