function nivelRanqueado (vitoria, derrota){
    saldoTotal = vitoria - derrota

    let nivel

    if ( saldoTotal <= 10) {
        nivel = "Ferro"
    } else if ( saldoTotal >= 11 && saldoTotal <= 20){
        nivel = "Bronze"
    } else if (saldoTotal >= 21 && saldoTotal <= 50){ 
        nivel = "Prata"
    } else if (saldoTotal >= 51 && saldoTotal <= 80){
        nivel = "Ouro"
    } else if ( saldoTotal >=81 && saldoTotal <= 90){
        nivel = "Diamente"
    } else if (saldoTotal >= 91 && saldoTotal >= 100){
        nivel = "Lendário"
    } 
    else nivel = "Imortal"

        return console.log ( "O Herói está com saldo de " + saldoTotal + " e está no nivel " + nivel)

    }

    

    



let vitoria = 100
let derrota = 23

const resultado = nivelRanqueado (vitoria, derrota)
console.log (resultado)